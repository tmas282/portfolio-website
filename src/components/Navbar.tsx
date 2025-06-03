export default () => {
    return(
    <nav className="fixed z-99 w-full font-default flex flex-row justify-between p-5 text-xl dark:bg-black dark:text-white bg-white text-black">
        <span className="mx-2">
            Tomás Moreira
        </span>
        <div className="flex flex-row justify-center">
            <a className="mx-2 group" onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth"
                })
                }}>
                Portfolio
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
            </a>
            <a className="mx-2 group" onClick={(e) => {
                e.preventDefault()
                document.getElementById("skills")?.scrollIntoView({
                    behavior: "smooth"
                })
                }}>
                Skills
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
            </a>
            <a className="mx-2 group">
                About me
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
            </a>
            <a className="mx-2 group">
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
            </a>
        </div>
    </nav>
    )
}