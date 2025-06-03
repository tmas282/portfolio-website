export default ({name, desc}: {name: string, desc: string}) => {
    return(
        <div className="flex h-full items-center justify-center">
            <div className="flex flex-col w-xl h-full justify-center">
                <p className="text-left p-3 pl-5 text-xl my-1">{name}</p>
                <p className="text-justify my-1">{desc}</p>
                <div className="flex justify-end my-1">
                    <button className="dark:bg-white dark:text-black bg-black text-white outline outline-offset-4 dark:outline-white outline-black
                    hover:dark:bg-black hover:dark:text-white hover:bg-white hover:text-black hover:dark:outline-black hover:outline-white
                    text-xl duration-300
                    p-2 px-4 m-2 scroll-smooth" onClick={(e) => {
                        document.getElementById("projects")?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>
                        View more...
                    </button>
                </div>
            </div>
        </div>
    )
}