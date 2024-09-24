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
        <div className={`${animate ? "animate-fadeinleft" : ""} flex-auto text-center md:text-left text-sm  md:text-2xl font-mono md:w-4/5`}>
            {description}
        </div>
    )
}