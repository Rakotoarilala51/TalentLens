from services.Chain_service.Simple_Chain import LLM

class Summary:
    def __init__(self):
        self.model=LLM()
    def general(self, cv:str):
        self.model.template="talk as short as possible about this person on this resume {resume}"
        result = self.model.invoke(cv)
        return result

    def linkedin(self, cv:str):
        self.model.template="give as sort as possible  linkedin about for this person based on this cv: {resume}"
        result = self.model.invoke(cv)
        return result

    def get_key_skill(self, cv:str)->list:
        self.model.template = "You are an AI assistant specialized in analysing resumes. I will give you the content of a cv and your job is to extract all key skills and technologies mentioned. For each skill, check if the user hold a certification, If certified: add (certified) next to it, if not, just list the skill normally. Return the result as a **simple sentence** all skill separated by comma.do NOT add explanations: {resume}"
        skill_list = self.model.invoke(cv)
        result = skill_list.split(",")
        return result
    def get_soft_skill(self, cv:str)->list:
        self.model.template = """
            You are an AI assistant specialized in analyzing resumes.
            
            I will give you the content of a CV.  
            👉 Your job is to extract all **soft skills** (behavioral and interpersonal qualities) that the candidate demonstrates.             
            ✅ List each soft skill only once.  
            ✅ If the CV clearly demonstrates this soft skill (through certifications, achievements, or strong wording), add "(strong evidence)" next to it.             
             Return the result as a **simple sentence** all skill separated by comma.do NOT add explanations        
            Here is the CV content:
            ---
            {cv_text}
            ---
            """
        skill_list = self.model.invoke(cv)
        return skill_list.split(",")
    def get_suggestions(self, cv):
        self.model.template = """
            You are an AI assistant specialized in reviewing resumes.
            
            I will give you the content of a CV.  
            👉 Your job is to analyze the CV and provide **personalized suggestions** to improve it.  
            
            ✅ Your suggestions should focus on:  
            - Enhancing structure and clarity.  
            - Adding relevant skills or certifications.  
            - Optimizing for recruiters and ATS systems.  
            - Improving language or formatting if necessary.  
            
            Return the suggestions as a **numbered list**. Be concise and professional.
            
            Here is the CV content:
            ---
            {cv_text}
            ---
            """
        result = self.model.invoke(cv)
        return result