import { useState } from "react";
import { ProjectWindow } from "./ProjectWindow"
import { SideArrow } from "./SideArrow"
import { Project } from "~/models/project";

export const OldHome = () => {

    const towerOfHanoi: Project = { title: "Tower of Hanoi", description: "“The Ultimate Puzzle: Can You Move the Towers?”", logoPath: "/images/tower_of_hanoi/hanoi_logo.png", githubLink: "https://github.com/Halisia-lab/Tower-of-Hanoi", googlePlayLink: "https://play.google.com/store/apps/details?id=keilis.hanoi_tower&hl=en-US&ah=7B9SDQYOygQ1hJXDiouBqdcJlFY", screenshots: ["/images/tower_of_hanoi/hanoi_picture_1.png", "/images/tower_of_hanoi/hanoi_win.png"] };
    const map2Place: Project = { title: "Map 2 Place", githubLink: "https://github.com/Halisia-lab/m2p-mobile", description: "“Navigate Paris with ease : Discover your parking spot fast”", logoPath: "/images/map_2_place/m2p_logo.png", screenshots: ["/images/map_2_place/m2p_park_info.png", "/images/map_2_place/m2p_picture_2.png", "/images/map_2_place/m2p_zoom_1.png", "/images/map_2_place/m2p_zoom_2.png", "/images/map_2_place/m2p_picture_1.png", "/images/map_2_place/m2p_signaler.png", "/images/map_2_place/m2p_localisation.png"] }
    const codeup: Project = { title: "CodeUp", githubLink: "https://github.com/Halisia-lab/codeup", description: "“Join the community of coding enthusiasts !”", logoPath: "/images/codeup/codeup_logo.png", screenshots: ["/images/codeup/codeup_picture_1.png", "/images/codeup/codeup_response.png", "/images/codeup/codeup_friends.png"] }
  
    const projectsList = [towerOfHanoi, map2Place, codeup];
    const [projectListIndex, setProjectListIndex] = useState(0);


   return ( <div className="bg-gradient-to-br from-cyan-500 to-sky-950 h-screen">
        <ProjectWindow project={projectsList[projectListIndex]} />
        {
          projectListIndex != 0 ?
            <SideArrow imageURL="images/commom/left.png" onClick={() => setProjectListIndex((projectListIndex - 1) % projectsList.length)} />
            : <span />
        }
        {
          projectListIndex != projectsList.length - 1 ?
            <SideArrow imageURL="images/commom/right.png" onClick={() => setProjectListIndex((projectListIndex + 1) % projectsList.length)} />
            : <span />
        }
      </div>);
}