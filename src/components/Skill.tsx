import type { Skill } from "../project/Skill";

export default ({name, img} : Skill) => {
    return(
        <div className="flex flex-row items-center gap-1 mx-auto my-2 p-2">
            <img className="size-10" src={img}/>
            <span className="text-xl">{name}</span>
        </div>
    )
}