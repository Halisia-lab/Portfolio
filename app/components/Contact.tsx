export const Contact = () => {
    return (
        <div id="contact" className="tracking-widest min-h-screen xl:h-screen w-screen flex-col flex justify-start pt-20 px-10 xl:px-20 text-gray-900">
            <div className="text-3xl xl:text-[40px] font-serif px-20 w-full">
                Work with me
            </div>

            <div className="flex-col flex xl:flex-row h-screen my-10 w-screen xl:w-3/4 justify-center xl:justify-between mx-10 ">
                <div className="self-center">
                    <img src="images/home/presentation.png" className="w-3/4 xl:justify-end" />
                </div>
                <div className="flex flex-col h-full justify-center space-y-10 text-3xl p-14">
                    <div className="flex flex-col space-y-2">
                        <div className="font-extralight ">
                            MOBILITY AVAILABILITY
                        </div>
                        <div className="font-extralight tracking-widest font-serif">
                            Ile-de-France, France

                        </div>
                    </div>
                    <div className="flex-col space-y-2">
                        <div className="font-extralight mt-5 text-xl">
                            PHONE
                        </div>
                        <div className="flex font-extralight tracking-widest font-serif">
                            {" +336 77 86 08 24"}
                        </div>
                    </div>
                    <div className="flex-col space-y-2">
                        <div className="font-extralight mt-5 text-xl">
                            EMAIL
                        </div>
                        <div className="flex font-extralight tracking-widest font-serif">
                            {"halifa.halisia@gmail.com"}
                        </div>
                    </div>
                </div></div>
        </div>
    )
}