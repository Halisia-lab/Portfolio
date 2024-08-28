
type SideArrowProps = {
    imageURL: string;
    onClick: () => void;
}

export const SideArrow = ({ imageURL, onClick }: SideArrowProps) => {
    return (
       <img src={imageURL} onClick={onClick} className={` hover:cursor-pointer opacity-30 hover:opacity-45 w-16 md:w-20 lg:w-24 fixed top-1/2 z-10 ${imageURL.includes("left") ? "left-0" : "right-0"}`} />
    )
}