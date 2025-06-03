import type { Skill } from "./Skill";

export type Project = {
    name: string,
    desc: string,
    skills?: Skill[],
    downloadUrl?: URL
}