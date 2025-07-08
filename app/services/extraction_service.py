from __future__ import annotations
from abc import ABC, abstractmethod


from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

class ExtractionService:
    def __init__(self, strategy:Strategy):
        self._strategy=strategy
    @property
    def strategy(self)->Strategy:
        return self._strategy
    @strategy.setter
    def strategy(self, strategy: Strategy):
        self._strategy=strategy
    def extract(self, filepath:str):
       return self._strategy.extract_text(filepath)

class Strategy(ABC):
    @abstractmethod
    def extract_text(self, contents):
        pass

class pdfExtractor(Strategy):
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
