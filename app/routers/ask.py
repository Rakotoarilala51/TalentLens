from fastapi import APIRouter, UploadFile, File
from services.Extraction_Service.ExtractionService import ExctractionService
from services.Extraction_Service.pdfExtractor import pdfExtractor
from services.File_Service.file_service import FileService

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
    return {"filename": text}