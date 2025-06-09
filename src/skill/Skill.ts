export enum SkillType{
    FrontEnd = "Front-End",
    BackEnd = "Back-End",
    Lang = "Programming languages",
    DB = "Database management",
    OS = "Operating Systems",
    SciFi = "Scientific frameworks",
    Cloud = "Cloud",
    VCS = "Version Control",
    Others = "Others"
}
export type Skill = {
    name: string,
    type: SkillType
}