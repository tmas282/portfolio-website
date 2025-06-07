import { useEffect, useState } from "react"

export default ({onComplete} : {onComplete: any}) => {
    const TEXT = "Tomás Moreira"
    const [text, setText] = useState<string>("")
    useEffect(()=>{
        var index = 0
        const interval = setInterval(() => {
            setText(TEXT.substring(0, index))
            index++
            if(index > TEXT.length){
                clearInterval(interval)
                setTimeout(()=>{
                    onComplete()
                }, 1000)
            }
        }, 100);
        return () => clearInterval(interval)
    }, [onComplete])
    return(
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink">|</span>
            </div>
            <div className="w-[400px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    )
}