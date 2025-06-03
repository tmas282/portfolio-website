import { useState } from "react";
import { createTheme, Modal, ModalBody, ModalFooter, ModalHeader, ThemeProvider } from "flowbite-react";
import type { Project } from "../project/Project";

export default ({name, img, desc, skills, downloadUrl} : Project) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const modalTheme = createTheme({
        modal:{
            "root": {
                "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
                "show": {
                "on": "flex bg-white/70 dark:bg-black/70",
                "off": "hidden"
                },
            },
            "content": {
                "base": "relative h-full w-full p-4 md:h-auto",
                "inner": "relative flex max-h-[90dvh] flex-col rounded-lg bg-gray-50 shadow dark:bg-gray-950 text-black dark:text-white"
            },
            "body": {
                "base": "flex-1 overflow-auto p-6",
                "popup": "pt-0"
            },
            "header": {
                "base": "flex items-start justify-between rounded-t border-b p-5 border-gray-600",
                "popup": "border-b-0 p-2",
                "title": "text-xl font-medium text-black dark:text-white",
                "close": {
                    "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600",
                    "icon": "h-5 w-5"
                }
            },
            "footer": {
                "base": "flex items-center space-x-2 rounded-b border-gray-600",
                "popup": "border-t"
            }
        }
    })
    return(
        <div>
            <ThemeProvider theme={modalTheme}>
            <Modal dismissible show={modalOpen} onClose={() => {setModalOpen(false)}}>
                <ModalHeader>{name}</ModalHeader>
                <ModalBody>
                    <div>
                        <img src={img} className="w-fit"/>
                        <p>{desc}</p>
                        {skills && 
                        <div className="flex flex-row gap-1">
                            {skills.map((v, i) => {
                                return(
                                    <div className="flex flex-row gap-1 p-1 px-2 rounded-md
                                    dark:bg-black bg-gray-200 dark:text-white text-black" key={i}>
                                        <img className="size-4" src={v.img}/>
                                        <span className="text-xs">{v.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                        }
                    </div>
                </ModalBody>
                <ModalFooter>
                    {
                        downloadUrl
                        &&
                        <a className="dark:bg-white dark:text-black bg-black text-white outline outline-offset-4 dark:outline-white outline-black
                            hover:dark:bg-transparent hover:dark:text-white hover:bg-transparent hover:text-black hover:dark:outline-transparent hover:outline-transparent
                            text-xs duration-300
                            p-1 px-2 flex gap-1 text-center" type="button" target="_blank" href={downloadUrl.toString()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download git repository
                        </a>
                    }
                    {
                        downloadUrl === undefined &&
                        <button className="dark:bg-white dark:text-black bg-black text-white outline outline-offset-4 dark:outline-white outline-black
                            hover:dark:bg-transparent hover:dark:text-white hover:bg-transparent hover:text-black hover:dark:outline-transparent hover:outline-transparent
                            text-xs duration-300
                            p-1 px-2" type="button" onClick={() => {setModalOpen(false)}}>
                            Close
                        </button>
                    }
                </ModalFooter>
            </Modal>
            </ThemeProvider>
            <div className="flex flex-col justify-center items-center m-3">
                <span className="uppercase text-xl">{name}</span>
                <div className="text-sm flex flex-row gap-3">
                    {skills?.map((v, i) => {
                        return <img className="size-5" src={v.img} key={i}/>
                    })}
                </div>
                <button className="group text-xl" onClick={() => {setModalOpen(true)}}>
                    See more...
                    <span className="block max-w-full group-hover:max-w-0 transition-all duration-500 h-[0.100rem] dark:bg-white bg-black"></span>
                </button>
            </div>
        </div>
    );
}