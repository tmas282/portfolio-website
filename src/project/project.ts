import type { Skill } from "../skill/Skill"

export type Project = {
    title: string,
    description: string,
    skills: Skill[],
    links?: {
        title: string, 
        link:string | URL
    }[]
}