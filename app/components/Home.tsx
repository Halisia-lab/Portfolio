export const Home = () => {
    return (
        <div className="bg-gray-100 h-screen w-screen relative flex-col">
            <div className="flex h-4/6 lg:h-screen w-full lg:w-7/12 justify-center text-center lg:absolute top-20 pt-14 lg:pt-0">
                <div className="flex flex-col w-2/3 h-4/6 lg:h-5/6 justify-around font-extralight">
                    <div className="text-2xl">
                        PORTFOLIO
                    </div>
                    <div className="text-[100px] font-serif">
                        <div className="">
                            Halisia
                        </div>
                        <div className="">
                            Halifa
                        </div>
                    </div>
                    <div className="flex-col lg:flex lg:flex-row justify-around text-xl ">
                        <div className="">
                            WEB & MOBILE DEVELOPER
                        </div>
                        <a href="mailto:halifa.halisia@gmail.com" className="pt-2 lg:pt-0 hover:underline">
                            EMAIL ME
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <img src="images/home/laptop.png" className="w-11/12 lg:w-fit  lg:h-screen"/>
                </div>
        </div>
    )
}