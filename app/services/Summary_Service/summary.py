from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
import os

class Summary:
    def __init__(self):
        load_dotenv()
        self.api_key = os.getenv("API_KEY")
        self.llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key = self.api_key)
        self.template=""
    def general(self, cv:str):
        self.template = "talk as short as possible about this person on this resume {resume}"
        prompt = PromptTemplate.from_template(self.template)
        chain = prompt | self.llm
        result = chain.invoke(cv)
        return result.content

    def linkedin(self, cv:str):
        self.template = "give a linkedin bio for this person based on his cv: {resume}"
        prompt = PromptTemplate.from_template(self.template)
        chain = prompt | self.llm
        result = chain.invoke(cv)
        return result.content