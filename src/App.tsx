import { useState } from "react"
import LoadingScreen from "./sections/LoadingScreen"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"

export default ()=>{
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    return(
        <>
            {isLoaded === false && <LoadingScreen onComplete={() => {
                setIsLoaded(true)
            }}/>}
            <div className={"min-h-screen transition-opacity duration-700 " + isLoaded ? "opacity-100" : "opacity-0" + " bg-black text-gray-100"}>
                <Navbar/>
                <Home/>
            </div>
        </>
    )
}