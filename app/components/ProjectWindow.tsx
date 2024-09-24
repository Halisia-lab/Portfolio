import { Project } from "~/models/project"
import { Banner } from "./Banner"
import { DescriptionBox } from "./DescriptionBox"
import { LinkedButton } from "./LinkedButton"
import { ScreenshotDisplayer } from "./ScreenshotDisplayer"
import { SideArrow } from "./SideArrow"

type ProjectProps = {
    project: Project;
}


export const ProjectWindow = ({ project }: ProjectProps) => {
    return (

        <div id="about"className="bg-gradient-to-br from-cyan-500 to-sky-950 h-screen">
            <Banner logoPath={project.logoPath} title={project.title} />
            <div className="flex justify-center py-5">
                <div className="col w-5/12 space-y-10 relative md:flex md:row md:space-y-0 md:space-x-10 items-center md:w-3/6 xl:w-5/12 3xl:w-4/12 4xl:w-4/12 md:justify-center ">
                    <DescriptionBox description={project.description} />
                    <ScreenshotDisplayer screenshots={project.screenshots} />
                    <div className="absolute bottom-5 lg:bottom-10 -left-28 sm:right-60 md:left-32 lg:left-44 xl:left-56 flex flex-col">
                        {
                            project.googlePlayLink ?
                                <LinkedButton link={project.googlePlayLink} imageURL="images/commom/google_play.png" />
                                : <div></div>
                        }
                        <LinkedButton link={project.githubLink} imageURL="images/commom/github.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}