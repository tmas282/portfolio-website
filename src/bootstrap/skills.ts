import { SkillType, type Skill } from "../skill/Skill";

export const SKILLS: Skill[] = [
    {name: "React.js", type: SkillType.FrontEnd},
    {name: "Tailwind.css", type: SkillType.FrontEnd},
    {name: "Framer", type: SkillType.FrontEnd},
    {name: "Bootstrapp", type: SkillType.FrontEnd},
    {name: "JQuery", type: SkillType.FrontEnd},

    {name: "Next.js", type: SkillType.BackEnd},
    {name: "Express.js", type: SkillType.BackEnd},

    {name: "Javascript", type: SkillType.Lang},
    {name: "Typescript", type: SkillType.Lang},
    {name: "PHP", type: SkillType.Lang},
    {name: "Python", type: SkillType.Lang},
    {name: "Java", type: SkillType.Lang},
    {name: "C/C++", type: SkillType.Lang},
    {name: "C#", type: SkillType.Lang},

    {name: "SQL", type: SkillType.DB},
    {name: "MySQL", type: SkillType.DB},
    {name: "NoSQL", type: SkillType.DB},
    {name: "Firestore", type: SkillType.DB},
    {name: "H2", type: SkillType.DB},
    {name: "Oracle Express", type: SkillType.DB},

    {name: "Windows", type: SkillType.OS},
    {name: "Ubuntu", type: SkillType.OS},
    {name: "Linux", type: SkillType.OS},

    {name: "SciPy", type: SkillType.SciFi},
    {name: "NumPy", type: SkillType.SciFi},

    {name: "Azure DevOps", type: SkillType.Cloud},
    {name: "Google Cloud", type: SkillType.Cloud},
    {name: "Firebase", type: SkillType.Cloud},

    {name: "Git", type: SkillType.VCS},
    {name: "GitHub", type: SkillType.VCS},
    {name: "BitBucket", type: SkillType.VCS},
    
    {name: "Arduino", type: SkillType.Others},
    {name: "Unity", type: SkillType.Others},
]