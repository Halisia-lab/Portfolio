import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { NavBar } from "~/components/NavBar";
import { Home } from "~/components/Home";


export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Projects window" },
  ];
};

export default function Index() {

  return (
    <div>
      {/* <button onClick={() => setVisibleNote(true)} className=" bg-[#0c708c] md:bg-[#0b5874] absolute h-20 w-5 right-0 md:bottom-10 bottom-10 rounded-tl-lg rounded-bl-lg text-white text-3xl">|</button>
      <div className={`${visibleNote ? "" : "hidden"} z-20 p-2 text-lg absolute w-7/12 bg-[#0c708c] bottom-0 md:bottom-0 right-0 h-4/12 md:h-fit rounded md:rounded-bl-xl text-white`}>
        <div className="relative">Welcome! 👋</div> <br /><button onClick={() => setVisibleNote(false)} className="absolute top-4 right-3 w-5 "><img src="/images/commom/close.png" /></button>
        Thank you for visiting my portfolio. This site is currently a work in progress, and I’m excited to keep building it and give you a sneak peek into my professional journey. For now, you can explore my projects, and I look forward to sharing more updates soon. <br />Your feedback is always welcome!
      </div> */}

      <NavBar />
      <Home />

    </div>

  );
}
