
from dotenv import load_dotenv  
load = load_dotenv()

MONGO_URL = load.env("MONGO_URL")
MONGO_FORM_DB = "Portfolio_data"
MONGO_FORM_COLLECTION = "portfolio_contact_form"
