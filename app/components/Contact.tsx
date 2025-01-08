export const Contact = () => {
    return (
        <div id="contact" className="tracking-widest h-screen w-screen flex-col flex pt-20 px-10 xl:px-20 text-gray-900">
            <div className="text-3xl xl:text-[40px] font-serif w-full">
                Work with me
            </div>
            <div className="flex flex-col h-full justify-center space-y-10 text-lg xl:text-3xl">
                <div className="flex flex-col space-y-2 w-3/4 lg:w-full">
                    <div className="font-extralight text-xl">
                        MOBILITY AVAILABILITY
                    </div>
                    <div className="font-extralight tracking-widest font-serif">
                    <ul className="space-y-0">
                        
                        <li>
                        🇫🇷 Ile-de-France, Bordeaux
                        </li>
                        <li>
                        🇨🇭 Genève, Lausanne
                        </li>
                        <li>
                        🇬🇧 Birmingham
                        </li>
                    </ul>

                    </div>
                </div>
                <div className="flex-col space-y-2">
                    <div className="font-extralight mt-5 text-xl">
                        PHONE
                    </div>
                    <div className="flex font-extralight tracking-widest font-serif">
                        {" +33 6 77 86 08 24"}
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

    )
}