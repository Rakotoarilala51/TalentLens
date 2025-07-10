from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain.chains import LLMChain
import os
load_dotenv()

api_key = os.getenv("API_KEY")
llm = ChatGoogleGenerativeAI(model = "gemini-2.0-flash", google_api_key= api_key)
cv = "ANDRIAMBOLOLONA\nRiantsoa Chérica\nDévéloppeur Web junior\nPhone: +261 38 40 790 08\nEmail: riantsoacherica01@gmail.com\nLinkdIn : www.linkedin.com/in/riantsoa-\ncherica-88740a303\nAddress: Tsimmbazaza Antananarivo Madagascar\nPortfolio: https://cherica.vercel.app/\nGithub: https://github.com/cherica01\nCONTACT\n Contribution au développement d'applications web de gestion des comptes des\nvisiteurs de bibliothèque par région.\nEXPÉRIENCES\nPROFESSIONNELLES\nEDUCATIONS\nENGAGEMENTS\nNew Vision Agency (NVA)\nLicence 3 en Informatique,Risques et Décision (En cours )\nBaccalauréat Série D\nDéveloppeur Full-stack (Mars 2023 - Mai 2023)\nE.S.M.I.A (École Supérieur de Management et de l’Informatique Appliqué) | 2022-2025\nL.S.C.A(Lycéé Sacre Coeur Ambohimahasoa)\nFreeCodeCamp | 2025\nResponsive Web Design\nFreeCodeCamp | 2025\nJavascript Algorithms and Data Structures\n Mentorat HTML&CSS | 2024\nDéveloppeur Full-stack (Janvier 2025 - Avril 2025)\nMinistère de l’Education Nationale-Madagascar","Ministère de l’Education Nationale-Madagascar\n Contribution au développement d'un plateforme intelligente pour la gestion des\névénements et les agents\nDéveloppeur Back-end (Mars 2024 - Mai 2024)\nMinistère de l’Education Nationale-Madagascar\n Développement d’une application mobile pour la gestion des tâches hebdomadaires\ndes enseignants\nCERTIFICATIONS\nOrange Digital Center (O.D.C) | 2025\nTransformez votre vision en start-up\nOrange Digital Center (O.D.C) | 2025\nMaîtrisez les Techniques du Web Scraping\nAccompagnement d’élèves en L1 sur\nles technologies web de base\nHackathon ESMIA 1 ére Edition | 2025\nParticipant au hackathon ESMIA avec la\nStartUp Nexuscraft \nHackathon ESMIA 2 éme Edition | 2025\nParticipant au hackathon ESMIA avec la\nStartUp Nexuscraft \nIT Club Madagascar | 2025\nClub robotique à Madagascar (niveau\nalpha)\nCOMPETENCES Languages : Python , Php , HTML , CSS\nFrameworks: Django , React.js , Nextjs\nBases de données: Sqlite , SQL , Postgresql\nOutils: V0dev , Canva , Github Outils: V0dev , Canva , Github\nATTESTATIONS"
template = "You are a senior in the field, give suggestions that will help this person:{CV}"
prompt = PromptTemplate.from_template(template)

chain = LLMChain(llm=llm, prompt=prompt)
print(chain.run(cv))
