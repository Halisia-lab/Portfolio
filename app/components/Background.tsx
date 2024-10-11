export const Background = () => {
    return (
        <div id="background" className="min-h-screen lg:h-screen w-screen lg:items-stretch flex justify-center lg:justify-start px-10 lg:px-20 pt-20 pb-16 lg:pt-20 text-gray-900 relative">
           <div className="flex  lg:space-x-20 space-y-10 lg:space-y-0 w-full lg:w-2/3 flex-col lg:flex-row lg:self-center">
            <div className="flex flex-col lg:w-1/2 justify-start ">
                <div className="mb-10 text-3xl lg:text-[40px] font-serif mt-5 lg:mt-0 lg:leading-[50px]">
                    Background
                </div>
                <div className="flex text-xl font-extralight tracking-widest">
                    <ul className="space-y-5">
                        <li>
                        <b>Freelance Web and Mobile Developer</b>, Aug. 2024 - present
                        </li>
                        <li>
                        <b>Sanofi</b><br/>
                        Full Stack Developer, Sept. 2022 - Sept 2023
                        </li>
                        <li>
                        <b>Sanofi</b><br/>
                        Mobile Application Projects Manager, Sept. 2020 - Sept 2022
                        </li>
                        <br/>
                        <li>
                        <b>ESGI</b>, 2021-2023<br/>
                        MS Software Architecture
                        </li>
                    </ul>
                  

                </div>
            </div>
            <div className="flex flex-col lg:w-1/2 justify-start pb-80 lg:pb-0 z-5 ">
            <div className="mb-10 text-3xl lg:text-[40px] font-serif mt-5 lg:mt-0 lg:leading-[50px]">
                    Expertise
                </div>
                <div className="flex text-xl font-extralight tracking-widest">
                <ul className="space-y-2 list-disc">
                    <li>
                    Turning Designs into Functional Products
                    </li>
                    <li>
                       Full-Stack Web Development
                        </li>
                        <li>
                       Cross-platform Mobile Development    
                        </li>
                        <li>
                        AWS Cloud Deployment
                        </li>
                        <li>
                        Experienced in Agile Practices
                        </li>
                        
                       
                    </ul>
                </div>
                
            </div>
            </div>
            <div className="lg:hidden absolute bottom-0 flex inset-x-0 h-1/4 pb-10">
                    <img src="images/home/collaborations_h.png" className=" w-screen"/>
                </div>
            <div className="hidden lg:flex absolute right-0 justify-end inset-y-0 pb-10">
                    <img src="images/home/collaborations.png" className=""/>
                </div>
        </div>
    );
}