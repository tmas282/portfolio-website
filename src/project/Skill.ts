export type Skill = {
    name: string,
    img?: string,
    type: SkillType
}
export enum SkillType {
    FrontEnd = "Front-End",
    BackEnd = "Back-End",
}