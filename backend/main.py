from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
from dotenv import load_dotenv
import os

from config import MONGO_FORM_DB, MONGO_FORM_COLLECTION

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

# =========================
# CORS
# =========================
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

# =========================
# MODELS
# =========================
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

# =========================
# ROUTES
# =========================
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
