import { useState } from "react";
import { NavLinkItem } from "./NavLinkItem"

export const NavBar = () => {
   const [sideMenuOpen, setSideMenuOpen] = useState(false);
   const [openClicked, setOpenClicked] = useState(false);
    const [animate, setAnimate] = useState(false);

    const openSideMenu = () => {
        setAnimate(true);
        setSideMenuOpen(true);
        setOpenClicked(true);
        setTimeout(() => {
            setAnimate(false);
        }, 1000); 
    };

    const closeSideMenu = () => {
        setAnimate(true);

        setOpenClicked(false);
        setTimeout(() => {
            setSideMenuOpen(false); 
            setAnimate(false); 
        }, 900); 
    };

    const getAnimation = () => {
        return openClicked ? "animate-fadeinright" : "animate-fadeinleft";
    };

    return (
        <div>
            <div className={`${sideMenuOpen || animate ? "visible" : "hidden"} fixed inset-0 w-full bg-black opacity-30 z-10 flex`}></div>
            
            <div className="flex justify-end py-3 text-sm w-full border-b border-b-slate-200 z-10 bg-white fixed">
                <div className="hidden lg:flex">
                    <NavLinkItem text={"Home"} />
                    <NavLinkItem text={"About"} />
                    <NavLinkItem text={"Background"} />
                    <NavLinkItem text={"Portfolio"} />
                    <NavLinkItem text={"Contact"} />
                </div>
                <button className="flex lg:hidden px-5" onClick={sideMenuOpen ? closeSideMenu : openSideMenu}>
                    {sideMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="z-20">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" className="z-20">
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                        </svg>
                    )}
                </button>

                {(sideMenuOpen || animate) && (
                    <div className={`${animate ? getAnimation() : ""} lg:hidden h-screen w-2/3 bg-white fixed right-0 z-19 flex flex-col space-y-10 text-2xl pt-5 px-2`}>
                        <NavLinkItem text={"Home"} />
                        <NavLinkItem text={"About"} />
                        <NavLinkItem text={"Background"} />
                        <NavLinkItem text={"Portfolio"} />
                        <NavLinkItem text={"Contact"} />
                    </div>
                )}
            </div>
        </div>
    )
}