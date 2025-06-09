import type { Project } from "../project/project";
import { SkillType } from "../skill/Skill";

export const PROJECTS: Project[] = [
    {
        title: "SkinClock",
        description: "A dynamic React.JS and Express.JS platform for trading in-game items, featuring secure MB WAY payments, MySQL database, and user-friendly interface.",
        skills: [
            {name: "React.js", type: SkillType.FrontEnd},
            {name: "Express.js", type: SkillType.BackEnd},
            {name: "MySQL", type: SkillType.DB},
        ],
        link: "http://www.google.com"
    },
    {
        title: "Cátia Marina Website",
        description: "Full-featured web app with calendar, Firebase backend, markdown editing, and responsive UI—built using Next.js, React, and Tailwind.",
        skills: [
            {name: "React.js", type: SkillType.FrontEnd},
            {name: "Tailwind.css", type: SkillType.FrontEnd},
            {name: "Next.js", type: SkillType.BackEnd},
            {name: "Firestore", type: SkillType.DB},
        ],
        link: "http://www.google.com"
    },
    {
        title: "Jogo Plataforma",
        description: "Engaging Unity-built 2D platformer with vibrant visuals and smooth gameplay, showcased at ExpoCIC 2023, highlighting creative design and technical prowess.",
        skills: [
            {name: "C#", type: SkillType.Lang},
            {name: "Unity", type: SkillType.Others},
        ],
        link: "http://www.google.com"
    },
    {
        title: "Integrative Project 2nd Semester",
        description: "Java-based urban green space management system with task allocation, team collaboration, and vehicle maintenance tracking, featuring robust testing and dynamic visualizations.",
        skills: [
            {name: "Java", type: SkillType.Lang},
        ],
        link: "http://www.google.com"
    },
    {
        title: "Integrative Project 3rd Semester",
        description: "Java-based industrial production management system integrating product engineering, production planning, and control with IoT sensor data, task scheduling, machine monitoring, TDD, and dynamic BOM/BOO visualizations.",
        skills: [
            {name: "Java", type: SkillType.Lang},
            {name: "C/C++", type: SkillType.Lang},
            {name: "Oracle Express", type: SkillType.DB},
            {name: "Arduino", type: SkillType.Others},
        ],
        link: "http://www.google.com"
    },
    {
        title: "Golo d'Or Bets",
        description: "Python-powered sports analytics tool for predicting football match outcomes using web scraping, statistical modeling, and normal distribution analysis.",
        skills: [
            {name: "Python", type: SkillType.Lang},
            {name: "SciPy", type: SkillType.SciFi},
            {name: "NumPy", type: SkillType.SciFi},
        ],
        link: "http://www.google.com"
    },
    {
        title: "MDISC Minimum Spanning Tree",
        description: "Innovative Java-based graph analysis tool leveraging Kruskal's algorithm for minimum spanning tree computation, featuring dynamic visualization and performance benchmarking for complex network datasets.",
        skills: [
            {name: "Java", type: SkillType.Lang},
        ],
        link: "http://www.google.com"
    },
]
//Can you do 20/25 word description about this project? The description should catch the eye of a recruiter