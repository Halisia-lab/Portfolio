export const Background = () => {
    return (
        <div id="background" className=" h-screen w-screen flex px-20 pt-20">
            <div className="flex flex-col w-1/2 justify-between h-4/5">
                <div className="flex font-extralighttext-2xl w-full tracking-widest">
                    BIO
                </div>
                <div className="">
                    <img src="images/home/presentation.png" className="w-3/5" />
                </div>
            </div>
            <div className="flex flex-col w-1/2 justify-between h-1/2 ">
                <div className="mb-10 text-[40px] font-serif ">
                    I am a freelance Web and Mobile Developer.
                </div>
                <div className="flex text-xl font-extralight tracking-widest">
                    I’m a freelance full-stack developer with experience across various projects, from startups to large corporations. <br /><br />
                    I’m passionate about creating effective and scalable solutions for both front-end and back-end needs.
                    Whether working independently or as part of a team, I’m committed to delivering high-quality results. Let’s collaborate to bring your ideas to life!
                </div>
            </div>
        </div>

    );
}