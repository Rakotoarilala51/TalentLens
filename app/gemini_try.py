from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os
load_dotenv()

api_key = os.getenv("API_KEY")
llm = ChatGoogleGenerativeAI(model = "gemini-2.0-flash", google_api_key= api_key)
response = llm.invoke("where is Madagascar")
print(response)
