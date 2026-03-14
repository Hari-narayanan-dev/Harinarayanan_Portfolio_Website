
from dotenv import load_dotenv
import os  

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")
MONGO_FORM_DB = "Portfolio_data"
MONGO_FORM_COLLECTION = "portfolio_contact_form"


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
