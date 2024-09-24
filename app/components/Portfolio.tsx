import { Project } from "~/models/project"
import { Banner } from "./Banner"
import { DescriptionBox } from "./DescriptionBox"
import { LinkedButton } from "./LinkedButton"
import { ScreenshotDisplayer } from "./ScreenshotDisplayer"

export const Portfolio = () => {

    const towerOfHanoi: Project = { title: "Tower of Hanoi", description: "“The Ultimate Puzzle: Can You Move the Towers?”", logoPath: "/images/tower_of_hanoi/hanoi_logo.png", githubLink: "https://github.com/Halisia-lab/Tower-of-Hanoi", googlePlayLink: "https://play.google.com/store/apps/details?id=keilis.hanoi_tower&hl=en-US&ah=7B9SDQYOygQ1hJXDiouBqdcJlFY", screenshots: ["/images/tower_of_hanoi/hanoi_picture_1.png", "/images/tower_of_hanoi/hanoi_win.png"] };
    const map2Place: Project = { title: "Map 2 Place", githubLink: "https://github.com/Halisia-lab/m2p-mobile", description: "“Navigate Paris with ease : Discover your parking spot fast”", logoPath: "/images/map_2_place/m2p_logo.png", screenshots: ["/images/map_2_place/m2p_park_info.png", "/images/map_2_place/m2p_picture_2.png", "/images/map_2_place/m2p_zoom_1.png", "/images/map_2_place/m2p_zoom_2.png", "/images/map_2_place/m2p_picture_1.png", "/images/map_2_place/m2p_signaler.png", "/images/map_2_place/m2p_localisation.png"] }
    const codeup: Project = { title: "CodeUp", githubLink: "https://github.com/Halisia-lab/codeup", description: "“Join the community of coding enthusiasts !”", logoPath: "/images/codeup/codeup_logo.png", screenshots: ["/images/codeup/codeup_picture_1.png", "/images/codeup/codeup_response.png", "/images/codeup/codeup_friends.png"] }

    return (

        <div id="portfolio">
            <div className="text-3xl lg:text-[40px] font-serif my-5 lg:pt-20  px-20 ">Work</div>
            <div className="lg:grid flex-col flex justify-center lg:flex-row lg:grid-cols-4 grid-rows-3 h-3/4 w-screen pb-16 lg:pt-20 px-20 gap-x-7 gap-y-7 text-white tracking-widest">

                <div className="row-span-3 overflow-clip"><img src="images/home/hanoi.png" className="h-full max-h-screen w-full lg:w-auto" /></div>

                <div className="row-span-3 bg-[#063859] col-span-2 px-3 lg:px-14 py-10 flex flex-col items-stretch">
                    <span className="text-xl lg:text-[50px] font-serif py-5 lg:leading-[50px]">Strategic Mobile Brain Challenge</span>
                    <div className="text-lg 3xl:text-xl font-extralight py-5 self-center ">
                        <p>Tower of Hanoi is a personal project that I am currently developing to diversify my portfolio of mobile applications.</p>
                        <br />
                        <p>It is a well-known puzzle game, and while I have implemented the core features, my goal is to introduce innovative elements to make the game more challenging and unique.</p>
                        <br />
                        <p>The app is in the process of being deployed on Google Play, and I am continuously working on further development.</p>
                    </div>

                </div>

                <div className="bg-[#eee6cc] flex justify-center"><img src="images/tower_of_hanoi/hanoi_logo.png" className="self-center h-52" /></div>
                <div className="bg-[#27313e] flex justify-center p-2"><ul className="self-center text-lg font-extralight text-center"> 
                    <li>Flutter / Dart</li>
                    <li>Cloud Firestore</li>
                    <li>Google Play Store Deployment</li></ul></div>
                <div className="bg-[#f6f6f6] flex flex-col justify-center">
                    <div className="self-center flex flex-col ">
                        {
                            towerOfHanoi.googlePlayLink ?
                                <LinkedButton link={towerOfHanoi.googlePlayLink} imageURL="images/commom/google_play.png" />
                                : <div></div>
                        }
                        <LinkedButton link={towerOfHanoi.githubLink} imageURL="images/commom/github.png" />
                    </div>
                </div>



            </div>

            <div className="lg:grid flex flex-col lg:flex-row lg:grid-cols-4 grid-rows-3 h-3/4 w-screen pb-16 lg:pt-20 px-20 gap-x-7 gap-y-7 text-white tracking-widest justify-center">

                <div className="row-span-3 overflow-clip"><img src="images/home/m2p.png" className="h-full max-h-screen w-full lg:w-auto" /></div>

                <div className="row-span-3 bg-[#27313e] col-span-2 px-3 lg:px-14  py-10 flex flex-col items-stretch">
                    <span className="text-xl lg:text-[40px] font-serif py-5 lg:leading-[50px]">The Mobile App for Stress-Free Parking</span>
                    <div className="text-md 3xl:text-xl font-extralight py-5 self-center ">
                        <p>Map 2 Place is an academic project that I developed as part of a team of three members for a real client. The goal was to help users find parking spaces in the city of Paris.</p>
                        <br />
                        I was responsible for the mobile application development, handling tasks related to data retrieval from the API and implementing the various features :<br/><br/>
          
                        <ul className="list-disc">
                            <li>Displaying all available parking spaces around the user's location</li>
                            <li>  Searching for parking spaces around a specific address</li>
                            <li>  Reporting available parking spaces</li>
                            <li>  Providing personalized GPS navigation</li>
                            <li>Earning points to increase the user’s level</li>
                            <li> Advanced features for premium or users with higher levels</li>
                        </ul><br />


                        Although the app has been removed from Google Play due to school confidentiality, it was fully deployed and functional.
                        Given the challenge of parking in Paris, this concept could be quite useful.
                    </div>


                </div>

                <div className="bg-white flex justify-center border"><img src="images/map_2_place/m2p_logo.png" className="self-center h-52" /></div>
                <div className="bg-[#27313e] flex justify-center p-2"><ul className="self-center text-lg font-extralight text-center">
                    <li>Flutter / Dart</li>
                    <li>Google Maps API</li>
                    <li>Geolocation</li>
                    <li>Google Play Store Deployment</li>
                </ul>
                </div>
                <div className="bg-[#f6f6f6] flex flex-col justify-center">
                    <div className="self-center flex flex-col ">
                        {
                            map2Place.googlePlayLink ?
                                <LinkedButton link={map2Place.googlePlayLink} imageURL="images/commom/google_play.png" />
                                : <div></div>
                        }
                        <LinkedButton link={map2Place.githubLink} imageURL="images/commom/github.png" />
                    </div>
                </div>



            </div>
        </div>
    )
}