import type { Skill } from "./Skill";

export type Project = {
    name: string,
    img?: string,
    desc: string,
    skills?: Skill[],
    downloadUrl?: URL
}