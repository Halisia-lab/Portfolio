import { useState } from "react";
import { NavLinkItem } from "./NavLinkItem"


export const NavBar = () => {
   const [sideMenuOpen, setSideMenuOpen] = useState(false);
   const [openClicked, setOpenClicked] = useState(false);
    const [animateSideMenu, setAnimateSideMenu] = useState(false);


    const openSideMenu = () => {
        setAnimateSideMenu(true);
        setSideMenuOpen(true);
        setOpenClicked(true);
        setTimeout(() => {
            setAnimateSideMenu(false);
        }, 400); 
    };

     const closeSideMenu = () => {
        
        setAnimateSideMenu(true);
        setOpenClicked(false);
        setTimeout(() => {
            setSideMenuOpen(false); 
            setAnimateSideMenu(false); 
        }, 300); 
    };

   
    const getAnimation = () => {
        return openClicked ? "animate-fadeinright" : "animate-fadeinleft";
    };

    return (
        <div>
            <div className="flex justify-end py-3 text-sm w-screen border-b border-b-slate-200 z-10 bg-white fixed">
                <div className="hidden lg:flex">
                    <NavLinkItem text={"Home"} path={"#home"} onClick={closeSideMenu} />
                    <NavLinkItem text={"About"} path={"#about"} onClick={closeSideMenu} />
                    <NavLinkItem text={"Background"} path={"#background"} onClick={closeSideMenu} />
                    <NavLinkItem text={"Portfolio"} path={"#portfolio"} onClick={closeSideMenu} />
                    <NavLinkItem text={"Contact"} path={"#contact"} onClick={closeSideMenu} />
                </div>
                <button className="flex lg:hidden px-5" onClick={sideMenuOpen ? closeSideMenu : openSideMenu}>
                    {sideMenuOpen ? (
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" className="z-20">
                     <path d="M18.3 5.71a0.75 0.75 0 00-1.06 0L12 10.94 6.76 5.71a0.75 0.75 0 00-1.06 1.06L10.94 12l-5.24 5.24a0.75 0.75 0 101.06 1.06L12 13.06l5.24 5.24a0.75 0.75 0 001.06-1.06L13.06 12l5.24-5.24a0.75 0.75 0 000-1.06z"/>
                   </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" className="z-20">
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                        </svg>
                    )}
                </button>
                {(sideMenuOpen || animateSideMenu) && (
                    <div className={`${animateSideMenu ? getAnimation() : ""} lg:hidden h-screen w-2/3 bg-white fixed right-0 z-19 flex flex-col space-y-10 text-xl pt-5 px-2`}>
                        <NavLinkItem text={"Home"} path={"#home"} onClick={closeSideMenu} />
                        <NavLinkItem text={"About"} path={"#about"} onClick={closeSideMenu} />
                        <NavLinkItem text={"Background"} path={"#background"} onClick={closeSideMenu} />
                        <NavLinkItem text={"Portfolio"} path={"#portfolio"} onClick={closeSideMenu} />
                        <NavLinkItem text={"Contact"} path={"#contact"} onClick={closeSideMenu} />
                    </div>
                )}
            </div>
        </div>
    )
}
