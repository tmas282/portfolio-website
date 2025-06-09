import type { Skill } from "../skill/Skill"

export type Project = {
    title: string,
    description: string,
    skills: Skill[],
    link: string | URL
}