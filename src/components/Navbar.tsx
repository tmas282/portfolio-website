import { useEffect, useState } from "react"

export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : ""
    }, [isMenuOpen])

    function redirectTo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault()
        const url: URL = new URL(e.currentTarget.href)
        document.getElementById(url.hash.substring(1))?.scrollIntoView({behavior: "smooth"})
    }
    return(
        <>
        <nav className="fixed top-0 w-full z-40 bg-gray-950/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Tomás&nbsp;
                        <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">Moreira</span>
                    </a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => {
                        setIsMenuOpen(!isMenuOpen)
                    }}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors" onClick={e => redirectTo(e)}>Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={e => redirectTo(e)}>About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors" onClick={e => redirectTo(e)}>Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors" onClick={e => redirectTo(e)}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        <div className={`fixed top-0 left-0 w-full bg-gray-950/95 z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out 
            ${isMenuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        `}>
            <button onClick={() => {
                setIsMenuOpen(!isMenuOpen)
            }} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close">
                &times;
            </button>

            <a href="#home" className={`text-2xl text-semibold text-white transform transition-transform duration-300
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={async (e) => {
                setIsMenuOpen(false)
                redirectTo(e)
            }}>Home</a>
            <br />
            <a href="#about" className={`text-2xl text-semibold text-white transform transition-transform duration-300
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={async (e) => {
                setIsMenuOpen(false)
                redirectTo(e)
            }}>About</a>
            <br />
            <a href="#projects" className={`text-2xl text-semibold text-white transform transition-transform duration-300
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={async (e) => {
                setIsMenuOpen(false)
                redirectTo(e)
            }}>Projects</a>
            <br />
            <a href="#contact" className={`text-2xl text-semibold text-white transform transition-transform duration-300
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={async (e) => {
                setIsMenuOpen(false)
                redirectTo(e)
            }}>Contact</a>
        </div>
        </>
    )
}