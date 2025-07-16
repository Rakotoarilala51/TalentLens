from services.Chain_service.Simple_Chain import LLM

class Summary:
    def __init__(self):
        self.model=LLM()
    def general(self, cv:str):
        self.model.template="Analyze the provided text. If it appears to be a resume or CV, provide a concise professional summary of the person. If the text does not resemble a resume or CV, respond with: 'This does not appear to be a resume or CV. Please provide a valid resume or CV for summarization.' this is the text: {cv}"
        result = self.model.invoke(cv)
        return result

    def linkedin(self, cv:str):
        self.model.template="give as sort as possible  linkedin about for this person based on this cv: {resume}"
        result = self.model.invoke(cv)
        return result

    def get_key_skill(self, cv:str)->list:
        self.model.template = """
                    You are an AI assistant specialized in analyzing resumes.
                    
                    I will give you the content of a CV. Your job is to extract all **key skills and technologies** mentioned. For each skill, if the resume indicates the candidate holds a certification for it, add "(certified)" next to the skill. Otherwise, just list the skill normally.

                    Return the result as a **simple sentence** with all skills separated by commas. **Do NOT add explanations.** If the provided text does **not** appear to be a resume or CV, your response must be: "please provide a real resume"

                    Here is the CV content:
                    ---
                    {resume}
                ---
                """
        skill_list = self.model.invoke(cv)
        result = skill_list.split(",")
        return result
    def get_soft_skill(self, cv:str)->list:
        self.model.template = """
            You are an AI assistant specialized in analyzing resumes.

            I will give you the content of a CV.  
            Your job is to extract all **soft skills** (behavioral and interpersonal qualities) that the candidate demonstrates.             
            List each soft skill only once.  If the CV clearly demonstrates this soft skill (through certifications, achievements, or strong wording), add "(strong evidence)" next to it.             
            Return the result as a **simple sentence** and as short as possible, with all skills separated by commas. **Do NOT add explanations.** If the provided text does **not** appear to be a resume or CV, your response must be: "please provide a real resume"

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
            I will provide you with the content of a CV. Your task is to analyze it and give concise, personalized suggestions to improve it.
            Focus your suggestions on:
                Improving structure and clarity.
                Adding relevant skills or certifications.
                Optimizing for recruiters and ATS systems.
                Enhancing language and formatting.
            Return your suggestions as a short, comma-separated line of concise phrases. Do not include explanations, extra text, or numbering.
            If the provided content does not seem to be a resume or CV, respond only with: "Please provide a real resume."
            {cv}
            """
        result = self.model.invoke(cv)
        return result.split(",")