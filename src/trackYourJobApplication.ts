class Jobs {
    jobTitle: string;
    Company: string;
    Location: string;
    URL: string;
    datePosted: string;
    Contact: string;
    Status: string;
    Description: string;
    Notes: string;
    constructor(jobTitle: string, Company: string, Location: string, URL: string, datePosted: string,Contact: string, Status: string, Description: string, Notes: string) {
        this.jobTitle = jobTitle,
        this.Company = Company,
        this.Location = Location,
        this.URL = URL,
        this.datePosted = datePosted,
        this.Contact = Contact,
        this.Status = Status,
        this.Description = Description,
        this.Notes = Notes
    }
}
const jobData: Array<Jobs> = [
    new Jobs("Manager","DevMountain","Utah","devmountain.com","11/12/20","Marohn Howard","Researching","Manage Mentors","Notes");
    new Jobs("Mentor","DevMountain","Utah","devmountain.com","1/2/21","Dre","Researching","teach classes","Notes");
]

