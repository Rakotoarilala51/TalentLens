from fastapi import FastAPI
from routers import ask

app = FastAPI()
app.include_router(ask.router)

@app.get("/")
async def root():
    return {"message":"Hello nju"}