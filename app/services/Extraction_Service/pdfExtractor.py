from typing import List

from services.Extraction_Service.extractor import Extractor
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
class pdfExtractor(Extractor):
    def extract_text(self, contents: str) -> List[str]:
        loader = PyPDFLoader(contents)
        pages = loader.load()

        full_text = "".join([page.page_content for page in pages])

        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=50
        )
        docs = text_splitter.create_documents([full_text])
        return [doc.page_content for doc in docs]