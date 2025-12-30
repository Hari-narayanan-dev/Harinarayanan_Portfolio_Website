from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymongo
from config import *


app = FastAPI(title="Portfolio Backend")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict to frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactRequest(BaseModel):
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...)


@app.get("/")
async def root():
    return {"message": "Portfolio backend running"}


@app.post("/contact")
# async def contact(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
async def contact(data: ContactRequest):
    connection_string = MONGO_URL
    client = pymongo.MongoClient(connection_string)
    # Access your database (replace <database_name> with your actual database name)
    db = client[MONGO_FORM_DB]
    # Example: List all collections
    collection = db[MONGO_FORM_COLLECTION]
    contact_message = {
        "name": data.name,
        "email": data.email,
        "message": data.message
    }
    collection.insert_one(contact_message)
    # In production, save to DB / send email. For now just print + return
    print(f"New contact message from {data.name} <{data.email}>: {data.message}")
    return {"status": "success", "detail": "Message received"}
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 4000))
    app.run(host="0.0.0.0", port=port)