import { motion } from "motion/react"
import { ABOUT_DESCRIPTION, EDUCATION, WORK_EXPERIENCE } from "../bootstrap/about"
import { SKILLS } from "../bootstrap/skills"
import { SkillType } from "../skill/Skill"

export default () => {
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <motion.div className="max-w-3xl mx-auto px-4 transition-all duration-500 delay-500" initial={{opacity: 0, transform: "translateY(-40px)"}} whileInView={{opacity: 1, transform: "translateY(0px)"}}>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500
                to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        {ABOUT_DESCRIPTION}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.values(SkillType).map((v, i) => {
                            return(
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all" key={i}>
                                    <h3 className="text-xl font-bold mb-4">{v.toString()}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {SKILLS.map((skill, i) => {
                                            if(skill.type.toString() !== v.toString())
                                                return null
                                            return(
                                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition" key={i}>
                                                    {skill.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">📖Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {EDUCATION.map((v, i) => {
                                return <li key={i}>{v}</li>
                            })}
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            {Object.entries(WORK_EXPERIENCE).map((v, i) => {
                                return(
                                    <div key={i}>
                                        <h4 className="font-semibold">{v[0]}</h4>
                                        <p>{v[1]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}