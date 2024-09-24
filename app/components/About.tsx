export const About = () => {
    return (
        <div id="about" className="min-h-screen md:h-screen w-screen flex-col md:flex-row flex justify-center px-10 md:px-20 pt-5 md:pt-20 text-gray-900">
            <div className="flex flex-col md:w-1/2 justify-between h-4/5">
                <div className="flex font-extralighttext-2xl w-full tracking-widest">
                    BIO
                </div>
                <div className="justify-center flex md:justify-start">
                    <img src="images/home/presentation.png" className="w-3/4 md:w-3/5" />
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 justify-between h-1/2 ">
                <div className="mb-10 text-3xl md:text-[40px] font-serif mt-5 md:mt-0 md:leading-[50px]">
                    I am a freelance Web and Mobile Developer.
                </div>
                <div className="flex text-xl font-extralight tracking-widest">
                    I’m a freelance full-stack developer with experience across various projects, from startups to large corporations. <br /><br />
                    I’m passionate about creating effective and scalable solutions for both front-end and back-end needs.
                   
                </div>
                {/* Whether working independently or as part of a team, I’m committed to delivering high-quality results. Let’s collaborate to bring your ideas to life! */}
            </div>
        </div>
    )
}