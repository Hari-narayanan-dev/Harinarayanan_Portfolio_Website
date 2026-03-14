
from dotenv import load_dotenv
import os  

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")
MONGO_FORM_DB = "Portfolio_data"
MONGO_FORM_COLLECTION = "portfolio_contact_form"



# // ============================================================
# //  CAREER REFERENCE CONFIG — Harinarayanan Pari
# //  Merged from all sources — Used as AI chatbot system context
# //  Last updated: 2026
# // ============================================================

PORTFOLIO_CONTEXT = {
#   // ----------------------------------------------------------
#   //  PERSONAL
#   // ----------------------------------------------------------
  "personal": {
    "name": "Harinarayanan Pari",
    "also_known_as": "Hari Narayanan",
    "role": "Software Developer (Backend-focused Full-Stack)",
    "email": "harinarayananpari@gmail.com",
    "phone": "+91 6374369428",
    "linkedin": "https://linkedin.com/in/harinarayanan-pari",
    "github": "https://github.com/Harinarayanan-Pari",
    "languages": ["English", "Tamil"],
    "residence": "Chennai, Tamil Nadu, India",
    "preferred_work_location": "Bengaluru, Karnataka, India",
    "open_to_remote": True,
  },

  "General summary":"Backend-focused Full-Stack Developer with 1.7+ years of professional experience designing and delivering scalable web applications and intelligent backend services. Skilled in building REST APIs, distributed processing systems, AI-powered data pipelines, and large-scale Elasticsearch search solutions, with hands-on experience integrating cloud storage services and processing large volumes of documents.Demonstrated ability to own the full product lifecycle in startup environments — from requirements gathering and architecture design (HLD/LLD) to implementation, deployment, and optimization. Self-driven, collaborative, and consistently effective in fast-paced, high-ownership settings.",
#   // ----------------------------------------------------------
#   //  EDUCATION
#   // ----------------------------------------------------------
  "education": {
    "degree": "Bachelor of Engineering — Mechanical Engineering",
    "institution": "Rajiv Gandhi College of Engineering",
    "cgpa": "6.55 / 10",
  },

#   // ----------------------------------------------------------
#   //  EXPERIENCE
#   // ----------------------------------------------------------
  "experience": {
    "total_summary": "~2 years at Finkraft.ai (3-month internship + 1 year 7 months full-time)",
    "positions": [
      {
        "title": "Intern — Full Stack Developer",
        "company": "Finkraft.ai",
        "type": "Internship",
        "start": "April 15, 2024",
        "end": "July 15, 2024",
        "duration": "3 months",
      },
      {
        "title": "Software Developer",
        "company": "Finkraft.ai",
        "type": "Full-Time",
        "start": "July 15, 2024",
        "end": "Present",
        "duration": "~1 year 7 months (as of early 2026)",
        "responsibilities": [
          "Designed and implemented backend services for automated hotel invoice processing systems.",
          "Built Python-based pipelines to parse invoices, booking data, and email attachments.",
          "Implemented Elasticsearch indexing and optimized search queries for fast document retrieval.",
          "Integrated Azure Blob Storage for large-scale file upload, storage, and processing workflows.",
          "Developed internal tools and dashboards using React for monitoring backend processes.",
          "Implemented multithreaded processing to handle high-volume document parsing.",
          "Contributed to system architecture, HLD/LLD documentation, and feature design.",
          "Introduced Elasticsearch to the company after evaluating its suitability for large-scale fuzzy matching.",
          "Led cloud migration from AWS S3 to Azure Blob Storage for cost and performance optimization.",
          "Built and maintained full-stack websites with REST APIs, routing, and frontend integration.",
          "Implemented custom data validation services based on R&D to enforce business rule compliance.",
        ],
      },
    ],
    "awards": [
      "Appreciation award for developing the hotel invoice pipeline and introducing Elasticsearch with fuzzy matching to the company.",
    ],
  },

#   // ----------------------------------------------------------
#   //  SKILLS
#   // ----------------------------------------------------------
  "skills": {
    "frontend": ["HTML", "CSS", "JavaScript", "React.js"],

    "backend": ["Python", "FastAPI", "Flask", "Django", "REST API Development"],

    "database" : ["MongoDB", "PostgreSQL"],

    "cloud_storage": ["AWS S3", "Azure Blob Storage"],

    "search_data": ["Elasticsearch", "Data Processing Pipelines", "Fuzzy Matching"],

    "system_design": [
      "Multithreading",
      "Background Workers",
      "Automation Systems",
      "HLD (High-Level Design)",
      "LLD (Low-Level Design)",
      "Architecture Design",
      "Distributed Processing",
    ],

    "ai_ml": [
      "Prompt Engineering",
      "OpenAI API",
      "Google Gemini API",
      "AI-based Parsing",
      "OCR (Tesseract, PDFPlumber)",
    ],

    "tools": [
      "Git", "GitHub",
      "Postman",
      "VS Code",
      "Linux",
      "AG Grid",
      "API Integration",
    ],

    "integrations": ["Zoho Mail", "SendGrid", "REST APIs"],

    "soft_skills": [
      "Communication",
      "Emotional Intelligence",
      "Adaptability",
      "Problem Solving",
      "Architecture Design",
      "PRD Creation",
      "Data Analysis",
    ],
  },

#   // ----------------------------------------------------------
#   //  CERTIFICATIONS
#   // ----------------------------------------------------------
  "certifications": [
    {
      "title": "Full Stack Development with Python",
      "institute": "Besant Technologies, Marathahalli, Bangalore",
    },
    {
      "title": "Full Stack Development Internship",
      "duration": "3 months",
      "company": "Finkraft.ai",
    },
  ],

#   // ----------------------------------------------------------
#   //  PROJECTS
#   // ----------------------------------------------------------
  "projects": [
    {
      "name": "Hotel Invoice Reconciliation System",
      "description":
        "End-to-end reconciliation platform matching hotel invoice data against GSTR-2B and internal booking records to enable accurate GST reclaim for major enterprise clients.",
      "key_components": [
        "Scrapers — Automated tools to extract data and metadata from APIs and email attachments, stored on Azure/AWS.",
        "File Validator — OCR-based validation using Tesseract, PDFPlumber, and Gemini AI to ensure documents meet processing criteria.",
        "File Splitter — Intelligent multi-invoice splitting based on validator outputs, with detailed logging for traceability.",
        "AI-Based Parser — Scalable engine for parsing diverse/unstructured invoice formats including handwritten bills.",
        "Data Post-Processor — Cleaning and structuring parsed data for compliance requirements.",
        "Data Validator — Rule-based + AI-enhanced validation with confidence scoring on GSTINs, dates, and amounts.",
        "Fuzzy Matching Engine — Batch-wise cross-verification of invoices against 2B records, booking data, and expense reports.",
        "Manual Validation Interface — UI for human reviewers with Elasticsearch-powered nearest-match search.",
      ],
      "tech": ["Python", "FastAPI", "OpenAI API", "Gemini API", "Elasticsearch", "PostgreSQL", "MongoDB", "AWS S3", "Azure Blob"],
    },
    {
      "name": "Email Attachment Processing Pipeline",
      "description":
        "Python service that automatically downloads email attachments, processes ZIP/RAR archives, extracts documents, and uploads them to cloud storage. Stores metadata in database and triggers downstream processing workflows.",
      "tech": ["Python", "Multithreading", "MongoDB", "Azure Blob Storage"],
    },
    {
      "name": "Invoice Processing Pipeline (AI-Powered)",
      "description":
        "Automated invoice processing pipelines using OpenAI and Gemini APIs, processing 200,000+ invoices with improved speed and accuracy.",
      "tech": ["Python", "OpenAI API", "Gemini API", "AWS S3", "Azure Blob"],
    },
    {
      "name": "Modular Scraping System",
      "description":
        "Multi-source invoice collection system (email, asset links, UI-based) with layered validations and retry mechanisms.",
      "tech": ["Python", "REST APIs", "Email scraping"],
    },
    {
      "name": "Hotels Website (Full-Stack Platform)",
      "description":
        "Full-stack hotel invoice platform for internal teams and vendors to access, manage, and reconcile hotel invoices across multiple companies.",
      "highlights": [
        "Elasticsearch-powered hotel search with fuzzy and filterable capabilities across large datasets.",
        "AG Grid tables with interactive data visualizations and embedded charts.",
        "Bulk and single invoice upload with drag-and-drop UI and progress tracking.",
        "Real-time file parsing and editable invoice data previews for on-the-fly corrections.",
        "Vendor score generation system with a dedicated UI for performance metrics.",
      ],
      "tech": ["React.js", "Python", "Flask/Django", "Elasticsearch", "AG Grid", "PostgreSQL", "MongoDB"],
    },
    {
      "name": "Backend Automation Tools",
      "description":
        "Suite of backend utilities for bulk data processing, indexing documents in Elasticsearch, and automating data extraction workflows.",
      "tech": ["Python", "Elasticsearch", "REST APIs"],
    },
    {
      "name": "Bulk Invoice Download System",
      "description":
        "Bulk invoice download for clients via secure ZIP archives, automated storage on Azure/AWS, and delivery via email integrations.",
      "tech": ["Python", "Azure Blob", "AWS S3", "Zoho Mail", "SendGrid"],
    },
    {
      "name": "Column Mapping Engine",
      "description":
        "Gemini AI-powered engine that intelligently maps diverse client column names from CSV/XLSX files to a standardized internal database schema using semantic relevance.",
      "tech": ["Python", "Gemini API", "CSV/XLSX processing"],
    },
    {
      "name": "Column Merging Utility",
      "description":
        "Utility to unify rows across multiple tables using selected keys and fuzzy matching logic.",
      "tech": ["Python", "Fuzzy matching"],
    },
    {
      "name": "Cloud Migration (AWS S3 → Azure Blob)",
      "description":
        "Led migration of systems and files from AWS S3 to Azure Blob Storage for better cost and performance optimization.",
      "tech": ["AWS S3", "Azure Blob Storage", "Python"],
    },
  ],

#   // ----------------------------------------------------------
#   //  PROFILE SUMMARY
#   // ----------------------------------------------------------
}


# // ============================================================
# //  SYSTEM PROMPT — Drop this into your AI chatbot config
# //  as the `system` field in any Anthropic/OpenAI API call
# // ============================================================

SYSTEM_PROMPT = """
You are a helpful career assistant and portfolio chatbot for Harinarayanan Pari (also known as Hari Narayanan), a Software Developer.

Here is his complete, verified career profile:

---
NAME: Harinarayanan Pari
ROLE: Software Developer — Backend-focused Full-Stack
COMPANY: Finkraft.ai (2024 – Present)
EXPERIENCE: ~2 years total (3-month internship + 1 year 7 months full-time, same company)
RESIDENCE: Chennai, Tamil Nadu, India
PREFERRED LOCATION: Bengaluru, Karnataka, India — also open to remote opportunities

SKILLS:
- Backend: Python, FastAPI, Flask, Django, REST API Development
- Frontend: React.js, JavaScript, HTML, CSS
- Databases: MongoDB, PostgreSQL
- Cloud & Storage: AWS S3, Azure Blob Storage
- Search & Data: Elasticsearch, Data Processing Pipelines, Fuzzy Matching
- System Design: Multithreading, Background Workers, Automation Systems, HLD/LLD, Architecture Design
- AI/ML: Prompt Engineering, OpenAI API, Gemini API, AI-based Parsing, Tesseract OCR, PDFPlumber
- Tools: Git, GitHub, Postman, VS Code, Linux, AG Grid
- Integrations: Zoho Mail, SendGrid, REST APIs
- Soft Skills: Communication, Problem Solving, PRD Creation, Data Analysis, Adaptability

KEY PROJECTS:
1. Hotel Invoice Reconciliation System — End-to-end GST reconciliation platform for enterprise clients. Built scrapers, AI parsers, fuzzy matching engines, validators, and a manual review UI. Tech: Python, FastAPI, Elasticsearch, MongoDB, PostgreSQL, Azure Blob, AWS S3.
2. Email Attachment Processing Pipeline — Python service to auto-download attachments, extract ZIP/RAR archives, upload to cloud, and trigger downstream workflows. Tech: Python, Multithreading, MongoDB, Azure Blob.
3. Invoice Processing Pipeline — Processed 200,000+ invoices using OpenAI and Gemini APIs.
4. Modular Scraping System — Multi-source invoice collection (email, links, UI) with retries and validations.
5. Hotels Full-Stack Website — React + backend platform with Elasticsearch search, AG Grid tables, bulk upload/download, and vendor scoring UI.
6. Backend Automation Tools — Bulk data processing, Elasticsearch indexing, and data extraction automation.
7. Bulk Invoice Download — ZIP-based bulk download with Azure/AWS + Zoho/SendGrid delivery.
8. Column Mapping Engine — Gemini AI-based intelligent column standardization from CSV/XLSX files.
9. Column Merging Utility — Row unification across tables using fuzzy matching logic.
10. Cloud Migration — Led AWS S3 to Azure Blob Storage migration for cost and performance optimization.

AWARDS: Recognized for introducing Elasticsearch and building the hotel invoice pipeline.

EDUCATION: B.E. Mechanical Engineering — Rajiv Gandhi College of Engineering (CGPA: 6.55)
CERTIFICATIONS: Full Stack Development with Python — Besant Technologies, Bangalore

CONTACT:
Email: harinarayananpari@gmail.com
Phone: +91 6374369428
LinkedIn: https://linkedin.com/in/harinarayanan-pari
GitHub: https://github.com/Harinarayanan-Pari
RESIDENCE: Chennai, Tamil Nadu, India
PREFERRED WORK LOCATION: Bengaluru, Karnataka, India and open to remote opportunities

---

Answer questions about his skills, experience, projects, and background clearly and confidently.
If asked about things outside this profile, politely say you can only speak to his professional background.
"""