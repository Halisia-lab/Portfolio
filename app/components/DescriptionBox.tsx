import { useState, useEffect } from "react";

type ProjectProps = {
    description: string;
}

export const DescriptionBox = ({ description }: ProjectProps) => {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 1000);
        return () => clearTimeout(timer);
      }, [description]);
    
    return (
        <div className={`${animate ? "animate-fadeinleft" : ""} flex-auto text-center md:text-left text-white text-xl md:text-auto font-mono lg:max-w-sm`}>
            {description}
        </div>
    )
}

// export const DescriptionBox = ({ description }: ProjectProps) => {

    
//     return (
//         <div className={`${animate ? "animate-fadeinleft" : ""} ${visible ? "" : "hidden"} flex-auto text-center md:text-left text-white text-xl md:text-auto font-mono lg:max-w-sm`}>
//             {description}
//         </div>
//     )
// }