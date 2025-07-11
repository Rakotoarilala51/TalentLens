from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from langchain.schema.output_parser import StrOutputParser
from langchain.chains import SequentialChain, LLMChain
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("API_KEY")
llm = ChatGoogleGenerativeAI(model = "gemini-2.0-flash", google_api_key = api_key)

first_template = "Resumé cette texte en deux phrases: {text}"
first_prompt = PromptTemplate.from_template(first_template)
first_chain = LLMChain(llm=llm, prompt = first_prompt, output_key = "summary")
second_template = "Extraire 5 mots clés de ce texte :{text}"
second_prompt = PromptTemplate.from_template(second_template)
second_chain = LLMChain(llm=llm, prompt = second_prompt, output_key = "keywords")

text = "LangChain est une bibliothèque Python qui permet de créer des chaînes d'appels à des modèles de langage. Elle simplifie l'orchestration de workflows complexes en intégrant mémoire, outils et recherche documentaire."
full_chain = SequentialChain(    chains=[first_chain, second_chain], input_variables=["text"],output_variables = ["summary", "keywords"])
result = full_chain.invoke({"text":text})
print(result)


