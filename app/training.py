from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
import os
load_dotenv()

api_key = os.getenv("API_KEY")
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key=api_key)
template = "completer cette phrase:{phrases}"
prompt = PromptTemplate.from_template(template)
chain = prompt | llm
result = chain.invoke("les developpeurs adorent ...")
print(result)