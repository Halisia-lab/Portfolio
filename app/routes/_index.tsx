import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { ProjectWindow } from "~/components/ProjectWindow";
import { SideArrow } from "~/components/SideArrow";
import { Project } from "~/models/project";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Projects window" },
  ];
};

export default function Index() {
  const towerOfHanoi: Project = { title: "Tower of Hanoi", description: "“The Ultimate Puzzle: Can You Move the Towers?”", logoPath: "/images/tower_of_hanoi/hanoi_logo.png", githubLink: "https://github.com/Halisia-lab/Tower-of-Hanoi", screenshots: ["/images/tower_of_hanoi/hanoi_picture_1.png", "/images/tower_of_hanoi/hanoi_win.png"] };
  const map2Place: Project = { title: "Map 2 Place", githubLink: "https://github.com/Halisia-lab/m2p-mobile", description: "“Navigate Paris with ease : Discover your parking spot fast”", logoPath: "/images/map_2_place/m2p_logo.png", screenshots: ["/images/map_2_place/m2p_park_info.png", "/images/map_2_place/m2p_picture_1.png"] }
  const codeup: Project = { title: "CodeUp", githubLink: "https://github.com/Halisia-lab/codeup", description: "“Join the community of coding enthusiasts !”", logoPath: "/images/codeup/codeup_logo.png", screenshots: ["/images/codeup/codeup_picture_1.png", "/images/codeup/codeup_response.png", "/images/codeup/codeup_friends.png"] }

  const projectsList = [towerOfHanoi, map2Place, codeup];
  const [projectListIndex, setProjectListIndex] = useState(0);

  return (
    <div className="bg-gradient-to-br from-cyan-500 to-sky-950 h-screen">
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
    </div>
  );
}
