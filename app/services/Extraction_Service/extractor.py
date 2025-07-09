from abc import ABC, abstractmethod

class Extractor(ABC):
    @abstractmethod
    def extract_text(self, pathname):
        pass