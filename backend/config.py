
from dotenv import load_dotenv
import os  

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")
MONGO_FORM_DB = "Portfolio_data"
MONGO_FORM_COLLECTION = "portfolio_contact_form"
