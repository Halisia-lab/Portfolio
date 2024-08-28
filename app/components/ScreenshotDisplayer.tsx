import { useEffect, useState } from "react";

type ProjectProps = {
    screenshots: Array<string>;
}

export const ScreenshotDisplayer = ({ screenshots }: ProjectProps) => {

    const [screenshotIndex, setScreenshotIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const indicators: string[] = new Array(screenshots.length).fill("images/commom/screenshots_indicator.webp");

    useEffect(() => {
        setScreenshotIndex(0);
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 1000);
        return () => clearTimeout(timer);
    }, [screenshots]);
    return (
<div className="flex-col space-y-2">
    <div className={`w-full ${animate ? "animate-fadeinleft" : ""}`}><img src={screenshots[screenshotIndex]} /></div>
    <div className="flex row justify-center">
       {[...Array(screenshots.length)].map((x,i) =>
    <img src="images/commom/screenshots_indicator.webp" key={i} className={`w-5 px-1 hover:cursor-pointer ${ screenshotIndex == i ? "opacity-90" : "opacity-20"}`} onClick={()=> setScreenshotIndex(i)}/>
  )} 
    </div>
    
</div> 
    )
}