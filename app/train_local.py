from langchain_community.llms import Ollama
from langchain_core.prompts import PromptTemplate
llm = Ollama(model="mistral")


template = "translate this text to english : {texte}"

prompt = PromptTemplate(input_variables=["phrases"], template=template)

chain = prompt | llm

texte = "L’intelligence artificielle générative est une branche de l’IA capable de créer du contenu original comme du texte, des images, de la musique ou même du code. Elle repose sur des modèles d’apprentissage profond entraînés sur de grandes quantités de données. Ces modèles, comme ChatGPT ou DALL·E, peuvent imiter des styles et générer des résultats réalistes à partir de simples instructions. L’IA générative révolutionne des domaines variés, de la création artistique à la recherche scientifique. Cependant, elle soulève aussi des enjeux éthiques liés à la propriété intellectuelle et aux usages malveillants."

result = chain.invoke(texte)

print(result)