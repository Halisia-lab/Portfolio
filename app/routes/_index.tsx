import type { MetaFunction } from "@remix-run/node";
import { NavBar } from "~/components/NavBar";
import { Home } from "~/components/Home";
import { About } from "~/components/About";
import { Project } from "~/models/project";
import { Background } from "~/components/Background";
import { Portfolio } from "~/components/Portfolio";
import { Contact } from "~/components/Contact";


export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Projects window" },
  ];
};

export default function Index() {

const towerOfHanoi: Project = { title: "Tower of Hanoi", description: "“The Ultimate Puzzle: Can You Move the Towers?”", logoPath: "/images/tower_of_hanoi/hanoi_logo.png", githubLink: "https://github.com/Halisia-lab/Tower-of-Hanoi", googlePlayLink: "https://play.google.com/store/apps/details?id=keilis.hanoi_tower&hl=en-US&ah=7B9SDQYOygQ1hJXDiouBqdcJlFY", screenshots: ["/images/tower_of_hanoi/hanoi_picture_1.png", "/images/tower_of_hanoi/hanoi_win.png"] };
 

  return (
    <div className="flex-col overflow-x-hidden">
      <NavBar/>
      <Home />  
      <About />  
      <Background />
      <Portfolio />
      <Contact />
    </div>

  );
}
