from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

# 1️⃣ Charger le modèle à partir du dossier local
embedding_function = HuggingFaceEmbeddings(
    model_name="./models/all-MiniLM-L6-v2"
)

# 2️⃣ Initialiser Chroma
vectorstore = Chroma(
    collection_name="cv_collection",
    embedding_function=embedding_function,
    persist_directory="./chromadb"  # Répertoire pour persister
)

# 3️⃣ Ajouter des textes (exemple CVs)
cv_1 = "Backend Developer with Python, FastAPI, and PostgreSQL experience."
cv_2 = "Frontend Engineer with React, TypeScript, and UI/UX skills."

vectorstore.add_texts(
    texts=[cv_1, cv_2],
    metadatas=[
        {"filename": "cv_john.txt"},
        {"filename": "cv_jane.txt"}
    ]
)

# 4️⃣ Sauvegarder la base
vectorstore.persist()
print("✅ Embeddings créés et stockés localement.")

# 5️⃣ Exemple de recherche
job_offer = "Looking for a Python developer with FastAPI skills"
results = vectorstore.similarity_search(job_offer, k=2)

print("\n🔎 Résultats :")
for res in results:
    print("📄 Fichier :", res.metadata["filename"])
    print("📝 Contenu :", res.page_content)
