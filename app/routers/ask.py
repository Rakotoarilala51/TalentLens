from fastapi import APIRouter, UploadFile, File
from services.Extraction_Service.ExtractionService import ExctractionService
from services.Extraction_Service.pdfExtractor import pdfExtractor
from services.File_Service.file_service import FileService
from services.Summary_Service.summary import Summary

router = APIRouter(prefix="/ask")
UPLOAD_DIR = "uploads"
@router.get("/")
async def ask():
    return "hello world"
@router.post("/summarize-cv")
async def get_summary(file: UploadFile = File(...)):
    files = FileService()
    filepath = await files.write_file(file)
    strategy = ExctractionService(pdfExtractor())
    text = strategy.extract(filepath)
    files.remove_file(filepath)
    summary = Summary()
    cv = " ".join(text)
    general_summary = summary.general(cv)
    linkedin_bio = summary.linkedin(cv)
    key_skills = summary.get_key_skill(cv)
    soft_skills = summary.get_soft_skill(cv)
    suggestions = summary.get_suggestions(cv)
    return {"generalSummary": general_summary,
            "linkedInBio": linkedin_bio,
            "keySkills": key_skills,
            "softSkills": soft_skills,
            "suggestions": suggestions
            }