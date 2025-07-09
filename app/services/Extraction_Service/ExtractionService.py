from __future__ import annotations
from services.Extraction_Service.extractor import Extractor

class ExctractionService:
    def __init__(self, extractor: Extractor):
        self._extractor = extractor
    @property
    def extractor(self):
        return self._extractor
    @extractor.setter
    def extractor(self, extractor:Extractor):
        self._extractor=extractor
    def extract(self, pathname:str):
        return self._extractor.extract_text(pathname)