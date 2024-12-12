import { twMerge } from "tailwind-merge";


interface TagProps {
    text: string;
    color: "blue" | "green" | "red" | "yellow" | "purple";
}

const Tag = ({ text, color }: TagProps) => {

    const tagColor = color === "blue" ? "bg-blue-500" : color === "green" ? "bg-green-500" : color === "red" ? "bg-red-500" : color === "yellow" ? "bg-yellow-500" : color === "purple" ? "bg-indigo-500" : "bg-blue-500";
    const tagHover = color === "blue" ? "hover:bg-blue-600" : color === "green" ? "hover:bg-green-600" : color === "red" ? "hover:bg-red-600" : color === "yellow" ? "hover:bg-yellow-600" : color === "purple" ? "hover:bg-indigo-600" : "hover:bg-blue-600";
    // const tagShadow = color === "blue" ? "shadow-blue-500" : color === "green" ? "shadow-green-500" : color === "red" ? "shadow-red-500" : color === "yellow" ? "shadow-yellow-500" : color === "purple" ? "shadow-indigo-500" : "shadow-none";

    return (
        <div
            className={twMerge(
                `flex justify-center items-center ml-4 w-8 h-4 sm:ml-0 md:w-16 md:h-8  lg:w-28 lg:h-12 rounded-full hover:${tagHover} transition-all duration-[400ms]`,
                tagColor
            )}
        >
            <p
                className="text-white text-[0.6rem] md:text-[1rem] lg:text-[1.25rem] font-bold tracking-widest"
            >
            {text}
            </p>
        </div>
    )
}

export default Tag