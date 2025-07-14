from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
import os
from dotenv import load_dotenv

class LLM:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv("API_KEY")
        self.llm = ChatGoogleGenerativeAI(model = "gemini-2.0-flash", google_api_key = self.api_key)
        self._template = ""
    @property
    def template(self):
        return self._template
    @template.setter
    def template(self, value):
        if not value:
            raise ValueError("template cannot be null")
        self._template = value
    def invoke(self, cv):
        prompt = PromptTemplate.from_template(self._template)
        chain = prompt | self.llm
        result = chain.invoke(cv)
        return result.content
