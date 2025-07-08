from fastapi import APIRouter, UploadFile, File
from services.extraction_service import pdfExtractor, ExtractionService
import os
import uuid
router = APIRouter(prefix="/ask")
UPLOAD_DIR = "uploads"
@router.get("/")
async def ask():
    return "hello world"
@router.post("/summarize-cv")
async def get_summary(file: UploadFile = File(...)):
    os.makedirs(UPLOAD_DIR, exist_ok=True)
    filename = f"{uuid.uuid4()}_{file.filename}"
    filepath = os.path.join(UPLOAD_DIR, filename)
    print(filepath)
    with open(filepath, "wb") as f:
        f.write(await file.read())
    strategy = ExtractionService(pdfExtractor())
    text = strategy.extract(filepath)
    return {"filename": text}