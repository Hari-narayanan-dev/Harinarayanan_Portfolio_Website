# from fastapi import FastAPI, HTTPException, status
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel, EmailStr
# from pymongo import MongoClient
# from dotenv import load_dotenv
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import time
# import random
# import os
# import asyncio
# from google import genai
# import logging

# from config import MONGO_FORM_DB, MONGO_FORM_COLLECTION


# # ── Logger ─────────────────────────────────────────────────────────────────────
# logging.basicConfig(
#     level=logging.INFO,
#     format="%(asctime)s | %(levelname)-8s | %(message)s",
#     datefmt="%Y-%m-%d %H:%M:%S",
# )
# logger = logging.getLogger(__name__)

# # =========================
# # LOAD ENV
# # =========================
# load_dotenv()

# MONGO_URL = os.getenv("MONGO_URL")

# if not all([MONGO_URL, MONGO_FORM_DB, MONGO_FORM_COLLECTION]):
#     raise RuntimeError("Missing MongoDB configuration")

# # =========================
# # DATABASE
# # =========================
# client = MongoClient(MONGO_URL)
# db = client[MONGO_FORM_DB]
# collection = db[MONGO_FORM_COLLECTION]

# # =========================
# # APP
# # =========================
# app = FastAPI(title="Portfolio Backend")

# # =========================
# # CORS
# # =========================
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "https://hari-narayanan-portfolio.web.app",
#         "http://localhost:5173",
#     ],
#     allow_credentials=True,
#     allow_methods=["GET", "POST"],
#     allow_headers=["*"],
# )

# # ── Gemini setup ───────────────────────────────────────────────────────────────
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "YOUR_GEMINI_API_KEY_HERE")
# genai.configure(api_key=GEMINI_API_KEY)
# gemini = genai.GenerativeModel(
#     model_name="gemini-1.5-flash",
#     system_instruction=(
#         "You are a helpful AI assistant embedded in Hari Narayanan's developer portfolio. "
#         "Answer questions concisely and in a friendly, professional tone. "
#         "If asked about Hari, describe him as a skilled software developer. "
#         "Keep replies under 3 sentences unless a detailed explanation is needed."
#     ),
# )


# # =========================
# # MODELS
# # =========================
# class ContactRequest(BaseModel):
#     name: str
#     email: EmailStr
#     message: str

# # =========================
# # ROUTES
# # =========================
# # ── Request / Response schemas ─────────────────────────────────────────────────
# class ChatRequest(BaseModel):
#     message: str

# class ChatResponse(BaseModel):
#     reply: str
#     timestamp: int


# # ── Simple rule-based replies (swap for an LLM call if desired) ───────────────
# RESPONSES: dict[str, list[str]] = {
#     "hello":           ["Hey there! 👋 How can I help you today?", "Hello! Great to meet you."],
#     "hi":              ["Hi! What's on your mind?", "Hey! How can I assist?"],
#     "how are you":     ["Running smoothly — ready to help!", "All systems go! What do you need?"],
#     "bye":             ["Goodbye! Come back anytime. 👋", "See you later!"],
#     "help":            ["Sure! Ask me anything and I'll do my best to assist."],
#     "thanks":          ["You're welcome! 😊", "Happy to help!"],
#     "what can you do": ["I can answer questions, help brainstorm ideas, explain concepts, and more. Try asking me something!"],
#     "projects":        ["Check out the Projects section on this portfolio — some really cool work there!"],
#     "skills":          ["Hari has a strong set of skills listed on this page — scroll up to take a look!"],
#     "contact":         ["You can reach out via the Contact section at the bottom of this page."],
# }

# DEFAULT_REPLIES = [
#     "That's an interesting question — let me think about that.",
#     "I see what you mean. Could you tell me more?",
#     "Great point! Here's how I'd approach that…",
#     "I'm not 100% sure, but here's what I know.",
#     "Interesting! Ask me anything else about this portfolio.",
# ]


# # def get_reply(message: str) -> str:
# #     text = message.lower().strip()
# #     for keyword, replies in RESPONSES.items():
# #         if keyword in text:
# #             return random.choice(replies)
# #     # return random.choice(DEFAULT_REPLIES)
# #     return None  # No match → caller should fall through to Gemini

# def get_keyword_reply(message: str) -> str | None:
#     """Return a canned reply if a keyword matches, else None."""
#     text = message.lower().strip()
#     for keyword, replies in RESPONSES.items():
#         if keyword in text:
#             return random.choice(replies)
#     return None  # No match → caller should fall through to Gemini

# async def get_gemini_reply(message: str) -> str:
#     """Call Gemini asynchronously and return the text reply."""
#     loop = asyncio.get_event_loop()
#     # genai is sync — run it in a thread so we don't block the event loop
#     response = await loop.run_in_executor(
#         None,
#         lambda: gemini.generate_content(message),
#     )
#     return response.text.strip()


# # ── Routes ─────────────────────────────────────────────────────────────────────
# @app.post("/api/chat", response_model=ChatResponse)
# async def chat(body: ChatRequest):
#     if not body.message.strip():
#         logger.warning("Rejected empty message from client")
#         raise HTTPException(status_code=400, detail="Message cannot be empty")

#     logger.info(f"Incoming message: '{body.message}'")
#     start = time.time()

#     try:
#         # 1. Try keyword match first (instant, no API call)
#         reply = get_keyword_reply(body.message)

#         if reply is not None:
#             logger.info(f"Keyword match found → reply: '{reply}'")
#         else:
#             # 2. No keyword match → ask Gemini
#             logger.info("No keyword match — forwarding to Gemini...")
#             reply = await get_gemini_reply(body.message)
#             logger.info(f"Gemini reply received: '{reply[:80]}{'...' if len(reply) > 80 else ''}'")

#         elapsed = round((time.time() - start) * 1000)
#         logger.info(f"Response sent in {elapsed}ms")

#         return ChatResponse(reply=reply, timestamp=int(time.time() * 1000))

#     except Exception as e:
#         logger.error(f"Error processing message '{body.message}': {e}", exc_info=True)
#         raise HTTPException(status_code=500, detail=str(e))


# @app.get("/api/health")
# async def health():
#     """Liveness check."""
#     return {"status": "ok"}



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

# ── Portfolio reference data ───────────────────────────────────────────────────

PORTFOLIO_CONTEXT = """
NAME: Hari Narayanan

SUMMARY:
Backend-focused Full-Stack Developer with 1.7+ years of professional experience building
scalable backend systems, automation pipelines, and data-driven applications. Experienced
in designing APIs, building distributed processing systems, and integrating cloud storage
services. Proven ability to handle end-to-end product development in a startup environment,
including architecture design (HLD/LLD), backend implementation, and system optimization.

SKILLS:

* Backend: Python, FastAPI, Flask, REST API Development
* Frontend: React.js, JavaScript, HTML, CSS
* Databases: MongoDB, PostgreSQL
* Search & Data: Elasticsearch, Data Processing Pipelines
* Cloud & Storage: Azure Blob Storage
* System Design: Multithreading, Background Workers, Automation Systems
* Tools: Git, Postman, VS Code, Linux, API Integration

EXPERIENCE:

1. Software Developer — Finkraft.ai (2024–Present)

   * Designed and implemented backend services for automated hotel invoice processing systems
   * Built Python-based pipelines to parse invoices, booking data, and email attachments
   * Implemented Elasticsearch indexing and optimized search queries for fast document retrieval
   * Integrated Azure Blob Storage for large-scale file upload, storage, and processing workflows
   * Developed internal tools and dashboards using React for monitoring backend processes
   * Implemented multithreaded processing to handle high-volume document parsing
   * Contributed to system architecture, HLD/LLD documentation, and feature design

PROJECTS:

1. Hotel Invoice Parsing & Matching System

   * Built an automated backend system that extracts and processes hotel invoices
   * Matches invoice data with booking and expense records
   * Handles email scraping, attachment parsing, and document storage
   * Tech stack: Python, FastAPI, MongoDB, Elasticsearch, Azure Blob Storage

2. Email Attachment Processing Pipeline

   * Developed a Python service that automatically downloads email attachments,
     processes ZIP/RAR files, extracts documents, and uploads them to cloud storage
   * Stores metadata in database and triggers downstream processing workflows
   * Tech stack: Python, Multithreading, MongoDB, Azure Blob Storage

3. Backend Automation Tools

   * Built backend utilities for bulk data processing, indexing documents in Elasticsearch,
     and automating data extraction workflows
   * Tech stack: Python, Elasticsearch, REST APIs

EDUCATION:

* B.E. Mechanical Engineering

CONTACT:

* GitHub: github.com/[your-handle]
* LinkedIn: linkedin.com/in/harinarayanan-pari
* Email: [your-email]

LOCATION: Chennai, Tamil Nadu, India
"""


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
                        "Use the reference data below to answer questions about Hari accurately. "
                        "If asked something not covered in the reference data, answer from general knowledge. "
                        "Always be concise, friendly, and professional. "
                        "Keep replies under 3 sentences unless a detailed explanation is truly needed and reply only in text.\n\n"
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
        reply = get_keyword_reply(body.message)

        if reply is not None:
            logger.info(f"Keyword match → '{reply}'")
        else:
            logger.info("No keyword match — calling Groq (Llama 3)...")
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
