from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline
from langchain_community.llms import HuggingFacePipeline

# Charger le modèle et le tokenizer Hugging Face
model_name = "facebook/bart-large-cnn"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# Créer un pipeline Hugging Face
summarizer_pipeline = pipeline(
    "summarization", 
    model=model, 
    tokenizer=tokenizer, 
    framework="pt"
)

# Intégrer le pipeline dans LangChain
llm = HuggingFacePipeline(pipeline=summarizer_pipeline)

# Utiliser comme un LLM LangChain
text = """
John Doe is an experienced software engineer with 10 years of expertise in backend development, cloud infrastructure, and microservices architecture. 
He has led multiple projects in fintech and healthcare industries. He is proficient in Python, Java, and Golang. 
His strengths include problem solving, leadership, and mentoring junior developers.
"""

# Résumer le texte
summary = llm.invoke(text)

print("Résumé généré par BART :")
print(summary)
