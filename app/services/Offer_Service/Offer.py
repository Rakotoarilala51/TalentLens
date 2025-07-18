from services.Chain_service.Simple_Chain import LLM

class Offer:
    def __init__(self, desc):
        self.description =desc
        self.model = LLM()
    def get_job_info(self):
        self.model.template = """From the following job description, extract the key information and present it in json format, including only the specified fields. If a piece of information is not present use 'N/A' for that field.
            Fields to extract:
            _position_sought: the exact job title.
            _city: the city where the job is located.
            _country: the country where the job is located.
            _company_name: The name of the hiring company.
            _salary: The Salary or salary range(as indicated)
            _tags:A list of key words including the job's domain, the work arrangement
            this is the job description:{description}
            """
        result = self.model.invoke(self.description)
        return result