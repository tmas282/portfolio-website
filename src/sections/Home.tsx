import { motion } from "motion/react"

export default () => {
    function redirectTo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault()
        const url: URL = new URL(e.currentTarget.href)
        document.getElementById(url.hash.substring(1))?.scrollIntoView({behavior: "smooth"})
    }
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <motion.div className="text-center z-10 px-4  transition-all duration-500 delay-500" initial={{opacity: 0, transform: "translateY(-40px)"}} whileInView={{opacity: 1, transform: "translateY(0px)"}}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent leading-right">Hi, I'm Tomás Moreira</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify">
                    An Informatics Engineering student who loves learning and building new things.
                    I'm always up for a challenge and enjoy working in tech environments where I can grow and contribute.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden transform
                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]" onClick={(e) => redirectTo(e)}>
                        View Projects
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 transform
                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10" onClick={(e) => redirectTo(e)}>
                        Contact me
                    </a>
                </div>
            </motion.div>
        </section>
    )
}