"""
FastAPI backend for the ChatBox widget.

Install:
    pip install fastapi uvicorn google-generativeai

Run:
    uvicorn app:app --reload --port 8000
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
import asyncio
import time
import random
import os
import logging
from groq import Groq
from pydantic import BaseModel, EmailStr
from config import PORTFOLIO_CONTEXT


from config import MONGO_FORM_DB, MONGO_FORM_COLLECTION

# ── Logger ─────────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

# ── Groq client ────────────────────────────────────────────────────────────────
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# ── App + CORS must be configured BEFORE any routes ───────────────────────────
# =========================
# LOAD ENV
# =========================
load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

if not all([MONGO_URL, MONGO_FORM_DB, MONGO_FORM_COLLECTION]):
    raise RuntimeError("Missing MongoDB configuration")

# =========================
# DATABASE
# =========================
client = MongoClient(MONGO_URL)
db = client[MONGO_FORM_DB]
collection = db[MONGO_FORM_COLLECTION]

# =========================
# APP
# =========================
app = FastAPI(title="Portfolio Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://hari-narayanan-portfolio.web.app",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# ── Groq client ────────────────────────────────────────────────────────────────
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# ── Request / Response schemas ─────────────────────────────────────────────────
# =========================
# MODELS
# =========================
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str
    timestamp: int


# ── Keyword-matched quick replies ─────────────────────────────────────────────
RESPONSES: dict[str, list[str]] = {
    "hello":           ["Hey there! 👋 How can I help you today?", "Hello! Great to meet you."],
    "hi":              ["Hi! What's on your mind?", "Hey! How can I assist?"],
    "how are you":     ["Running smoothly — ready to help!", "All systems go! What do you need?"],
    "bye":             ["Goodbye! Come back anytime. 👋", "See you later!"],
    "thanks":          ["You're welcome! 😊", "Happy to help!"],
    "what can you do": ["I can answer questions, help brainstorm ideas, explain concepts, and more!"],
    "projects":        ["Check out the Projects section on this portfolio — some really cool work there!"],
    "skills":          ["Hari has a strong set of skills listed on this page — scroll up to take a look!"],
    "contact":         ["You can reach out via the Contact section at the bottom of this page."],
}


def get_keyword_reply(message: str) -> str | None:
    """Return a canned reply if a keyword matches, else None."""
    text = message.lower().strip()
    for keyword, replies in RESPONSES.items():
        if keyword in text:
            return random.choice(replies)
    return None  # No match → caller should fall through to Gemini


# ── Groq AI reply ──────────────────────────────────────────────────────────────
async def get_ai_reply(message: str) -> str:
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(
        None,
        lambda: groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are a helpful AI assistant embedded in Hari Narayanan's developer portfolio. "
                        "Use the reference data provided below to answer questions about Hari accurately. "
                        "Always be concise, friendly, and professional. Keep replies under 3 sentences unless a detailed explanation is truly needed. Reply in plain text only.\n\n"

                        "Guidelines:\n"
                        "- Answer questions about his skills, experience, projects, and background clearly and confidently.\n"
                        "- If asked about something not covered in the reference data, say you don't have that specific information, but offer to speak to his general skills and experience based on what you do know.\n"
                        "- If asked about anything unrelated to his professional background, politely clarify that you can only speak to his career and profile.\n"
                        "- Do NOT say phrases like 'this is outside my knowledge cutoff' — simply refer to what the reference data says.\n"
                        "- If someone wants to get in touch with Hari, let them know they can reach out via his contact number ({PORTFOLIO_CONTEXT['personal']['phone']}) or leave a message in the contact section below, and Hari will get back to them.\n\n"

                        f"--- REFERENCE DATA ---\n{PORTFOLIO_CONTEXT}\n--- END REFERENCE DATA ---"
                    ),
                },
                {"role": "user", "content": message},
            ],
            max_tokens=256,
            temperature=0.7,
        ),
    )
    return response.choices[0].message.content.strip()


# ── Routes ─────────────────────────────────────────────────────────────────────
@app.post("/api/chat", response_model=ChatResponse)
async def chat(body: ChatRequest):
    if not body.message.strip():
        logger.warning("Rejected empty message")
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    logger.info(f"Incoming: '{body.message}'")
    start = time.time()

    try:
        # reply = get_keyword_reply(body.message)

        # if reply is not None:
        #     logger.info(f"Keyword match → '{reply}'")
        # else:
        #     logger.info("No keyword match — calling Groq (Llama 3)...")
        #     reply = await get_ai_reply(body.message)
        #     logger.info(f"Groq reply: '{reply[:80]}{'...' if len(reply) > 80 else ''}'")

        logger.info("calling Groq (Llama 3)...")
        reply = await get_ai_reply(body.message)
        logger.info(f"Groq reply: '{reply[:80]}{'...' if len(reply) > 80 else ''}'")

        logger.info(f"Done in {round((time.time() - start) * 1000)}ms")
        return ChatResponse(reply=reply, timestamp=int(time.time() * 1000))

    except Exception as e:
        logger.error(f"Error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.get("/")
async def health_check():
    return {"status": "ok"}

@app.post("/contact", status_code=status.HTTP_201_CREATED)
async def contact(data: ContactRequest):
    try:
        result = collection.insert_one(data.dict())

        return {
            "status": "success",
            "id": str(result.inserted_id),
        }

    except Exception as e:
        print("CONTACT ERROR:", e)
        raise HTTPException(
            status_code=500,
            detail="Failed to submit contact message",
        )
