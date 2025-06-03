import { Carousel } from "flowbite-react"
import Navbar from "./components/Navbar"
import CarouselProject from "./components/CarouselProject"
import { PROJECTS, SKILLS } from "./bootstrap/info"
import Project from "./components/Project"
import { useState } from "react"
import { SkillType } from "./project/Skill"
import Skill from "./components/Skill"
export default () =>{
    const [projectsCount, setProjectsCount] = useState<number>(4);
    return(
        <>
            <Navbar/>
            <main className="dark:bg-black dark:text-white bg-white text-black font-default">
                <Carousel className="flex h-screen justify-center items-center w-full !overflow-x-hidden">
                    {PROJECTS.map((v) => {
                        return(
                            <CarouselProject name={v.name} desc={v.desc} key={v.name}/>
                        )
                    })}
                </Carousel>
                <div id="projects" className="w-full flex flex-col justify-center items-center">
                    <span className="w-[100%] uppercase underline underline-offset-4 text-5xl text-center align-bottom mx-auto
                    dark:text-white text-black">Projects</span>
                    <div className="w-[50rem] grid grid-cols-2 justify-center my-1">
                        {PROJECTS.map((v, i) => {
                            if(projectsCount == i + 1){
                                return null
                            }
                            return(
                                <Project name={v.name} img={v.img} desc={v.desc} skills={v.skills} downloadUrl={v.downloadUrl} key={v.name}/>
                            )
                        })}
                    </div>
                    <button className="dark:bg-white dark:text-black bg-black text-white outline outline-offset-4 dark:outline-white outline-black
                        hover:dark:bg-black hover:dark:text-white hover:bg-white hover:text-black hover:dark:outline-black hover:outline-white
                        text-xl duration-300
                        p-2 px-4 m-2 " type="button" onClick={() => {
                            setProjectsCount(projectsCount + 4)
                        }}>
                            View more...
                        </button>
                </div>
                <br />
                <div id="skills" className="w-full flex flex-col justify-center items-center">
                    <h1 className="w-[100%] uppercase underline underline-offset-4 text-5xl text-center align-bottom mx-auto
                    dark:text-white text-black">Skills</h1>
                    <br />
                    {Object.values(SkillType).map((v, i) => {
                        return(
                            <div className="m-3 w-full flex flex-row justify-start items-start" key={i}>
                                <h2 className="w-3/6 text-center text-3xl uppercase underline mt-3">{v}:</h2>
                                <div className="grid grid-cols-2 w-2/6">
                                    {SKILLS.filter((skill) => skill.type.toString() == v).map((v, i) => {
                                        return(
                                            <Skill name={v.name} img={v.img} type={v.type} key={i}/>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/*TODO: about me page and contact*/}
                <br />
            </main>
        </>
    )
}