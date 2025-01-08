export const About = () => {
    return (
        <div id="about" className="min-h-screen h-full w-screen flex-col md:flex-row flex justify-center px-10 md:px-20 pt-20 pb-10 md:pt-20 text-gray-900">
            <div className="flex flex-col md:w-1/2 justify-between h-4/5">
                <div className="flex font-serif text-3xl w-full tracking-widest">
                    BIO
                </div>
                <div className="justify-center flex md:justify-start">
                    <img src="images/home/photo.jpg" className="w-3/4 md:w-3/5 mx-14 md:mt-44" />
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 justify-between h-1/2 ">
                <div className="mb-10 text-3xl md:text-[40px] font-serif mt-5 md:mt-0 md:leading-[50px]">
                    I am a Web and Mobile Developer
                </div>
                <div className="flex text-xl font-extralight tracking-widest">
                    I am a full-stack developer with experience in various projects, from startups to large companies. I have a Master’s degree in Software Architecture,
                    which gave me strong skills in designing reliable and scalable systems.
                    <br /><br />
                    I am passionate about creating efficient solutions for both front-end and back-end development, always aiming to deliver high-quality
                    applications that meet user and business needs.


                </div>
            </div>
        </div>
    )
}