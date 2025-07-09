import os
import uuid
from fastapi import UploadFile, File
import aiofiles
class FileService:
    def __init__(self):
        self.UPLOAD_DIR="uploads"
    async def write_file(self, file:UploadFile=File(...))->str:
        filename = f"{uuid.uuid4()}_{file.filename}"
        filepath = os.path.join(self.UPLOAD_DIR, filename)
        async with aiofiles.open(filepath, "wb") as f:
            content = await file.read()
            await f.write(content)
        return filepath

    def remove_file(self, filepath: str) -> None:
        os.unlink(filepath)
