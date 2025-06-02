import { Carousel } from "flowbite-react"
import Navbar from "./components/Navbar"
import CarouselProject from "./components/CarouselProject"
import { CAROUSEL_INFO } from "./cfg/portfolioInfo"
export default () =>{
    return(
        <>
            <Navbar/>
            <main className="dark:bg-black dark:text-white bg-white text-black font-default">
                <Carousel className="flex h-screen justify-center items-center w-full !overflow-x-hidden">
                    {CAROUSEL_INFO.map((v) => {
                        return(
                            <CarouselProject name={v.name} desc={v.desc}/>
                        )
                    })}
                </Carousel>
                {/*TODO: portfolio table with details and download option*/}
                {/*TODO: skills overview*/}
                {/*TODO: about me page and contact*/}
            </main>
        </>
    )
}