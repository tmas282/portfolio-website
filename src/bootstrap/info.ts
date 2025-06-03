import type { Project } from "../project/Project";
import { SkillType, type Skill } from "../project/Skill";

export const PROJECTS: Project[] = [
    {
        name: "Project 1",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        skills: [
            {
                name: "React.js",
                type: SkillType.FrontEnd,
                img: "./reactjs.svg"
            },
            {
                name: "Tailwind.css",
                type: SkillType.FrontEnd,
                img: "./tailwindcss.svg"
            },
            {
                name: "Express.js",
                type: SkillType.BackEnd,
                img: "./expressjs.svg"
            },
        ],
        downloadUrl: new URL("https://adityapunmiya.com/"),
    },
    {
        name: "Project 2",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "Project 3",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]
export const SKILLS: Skill[] = [
    {
        name: "React.js",
        type: SkillType.FrontEnd,
        img: "./reactjs.svg"
    },
    {
        name: "Tailwind.css",
        type: SkillType.FrontEnd,
        img: "./tailwindcss.svg"
    },
    {
        name: "Express.js",
        type: SkillType.BackEnd,
        img: "./expressjs.svg"
    },
]