from fastapi import APIRouter, UploadFile, File
router = APIRouter(prefix="/ask")

@router.get("/")
async def ask():
    return "hello world"
@router.post("/summarize-cv")
async def get_summary(file: UploadFile = File(...)):
    contents = await file.read()
    return {"filename": len(contents)}