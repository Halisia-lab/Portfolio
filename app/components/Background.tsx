export const Background = () => {
    return (
        <div id="background" className="min-h-screen md:h-screen w-screen flex justify-center md:justify-start px-10 md:px-20 pt-20 pb-16 md:pt-20 text-gray-900 relative">
           <div className="flex md:items-stretch md:space-x-20 space-y-10 md:space-y-0 w-4/5 md:w-2/3 flex-col md:flex-row ">
            <div className="flex flex-col md:w-1/2 justify-start h-1/2 md:self-center">
                <div className="mb-10 text-3xl md:text-[40px] font-serif mt-5 md:mt-0 md:leading-[50px]">
                    Background
                </div>
                <div className="flex text-lg font-extralight tracking-widest">
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
            <div className="flex flex-col md:w-1/2 justify-start h-1/2 pb-56 md:pb-0 z-20 md:self-center">
            <div className="mb-10 text-3xl md:text-[40px] font-serif mt-5 md:mt-0 md:leading-[50px]">
                    Expertise
                </div>
                <div className="flex text-lg font-extralight tracking-widest">
                <ul className="space-y-2 list-disc">
                    <li>
                    Turning Designs into Functional Products
                    </li>
                    <li>
                       Full-Stack Web Development
                        </li>
                        <li>
                       Cross-platform Mobile Develpment
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
            <div className="md:hidden absolute bottom-0 flex inset-x-0 h-1/4">
                    <img src="images/home/collaborations_h.png" className=" w-screen"/>
                </div>
            <div className="hidden md:flex absolute right-0 justify-end inset-y-0">
                    <img src="images/home/collaborations.png" className=""/>
                </div>
        </div>
    );
}