export const Background = () => {
    return (
        <div id="background" className="min-h-screen h-full w-screen lg:items-stretch flex-row justify-center lg:justify-start px-10 lg:px-20 pt-20 pb-16 lg:pt-20 text-gray-900 ">
            <div className="flex  lg:space-x-20 space-y-10 lg:space-y-0 w-full  flex-col lg:flex-row lg:self-center mb-32">
                <div className="flex flex-col lg:w-1/2 justify-start ">
                    <div className="mb-10 text-3xl lg:text-[40px] font-serif mt-5 lg:mt-0 lg:leading-[50px]">
                        Background
                    </div>
                    <div className="flex text-xl font-extralight tracking-widest">
                        <ul className="space-y-5">

                            <li className="bg-slate-50 p-6">
                                <b className="text-xl">Sanofi | Full Stack Developer,</b><br />
                                Sept. 2022 - Sept. 2023 <br /><br />
                                <p>
                                    I developed a web application managing the professional needs of Sanofi
                                    employees
                                </p><br />
                                <ul className="list-disc">
                                    <li>Used the agile methodology (Scrum)</li>
                                    <li>Developed Front and Back functionalities</li>
                                    <li>Wrote unit test scenarios and completed unit testing and end-2-end</li>
                                    <li>Completed peers’ code reviews</li>
                                    <li>Collaborated and communicated in english with an international team</li>
                                </ul>
                            </li>

                            <li className="bg-slate-50 p-6">
                                <b className="text-xl">Sanofi | Mobile Application Projects Manager,</b><br />
                                Sept. 2020 - Sept. 2022 <br /><br />
                                <p>
                                    I created a project managing all Sanofi applications
                                </p><br />
                                <ul className="list-disc">
                                    <li>Contributed to the definition of user stories</li>
                                    <li>Developed an API to retrieve application metrics (KPI)</li>
                                    <li>Created the mobile wireframes</li>
                                    <li>Developed mobile functionalities</li>
                                    <li>Completed peers’ code reviews</li>
                                    <li>Collaborated and communicated in english with an international team</li>
                                </ul>

                            </li>
                            <li className="bg-slate-50 p-6">
                                <b className="text-xl">KTM Advance | Front end Web Developer,</b><br />
                                June 2019 - Dec. 2019 <br /><br />
                                <p>
                                    I developed a project with RATP for the learning of train (RER) drivers
                                </p><br />
                                <ul className="list-disc">
                                    <li>Analysed the operating manual of the train controls for the programmation</li>
                                    <li>Developed the interface illustrating the steps done by a driver</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/2 justify-start lg:pb-0 z-5 ">
                    <div className="mb-10 text-3xl lg:text-[40px] font-serif mt-5 lg:mt-0 lg:leading-[50px]">
                        Expertise
                    </div>
                    <div className="flex text-xl font-extralight tracking-widest bg-slate-950 text-white w-fit p-6">
                        <ul className="space-y-2">
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
            {/* <div className="lg:hidden absolute bottom-0 flex inset-x-0 h-1/4 pb-10">
                <img src="images/home/collaborations_h.png" className=" w-screen" />
            </div>
            <div className="hidden lg:flex absolute right-0 justify-end inset-y-0 pb-10">
                <img src="images/home/collaborations.png" className="" />
            </div> */}
        </div>
    );
}