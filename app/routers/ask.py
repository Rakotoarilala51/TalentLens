from fastapi import APIRouter

router = APIRouter(prefix="/ask")

@router.get("/")
async def ask():
    return "hello world"