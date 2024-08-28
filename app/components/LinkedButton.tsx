type LinkedButtonProps = {
    imageURL: string;
    link: string;
}

export const LinkedButton = ({ imageURL, link }: LinkedButtonProps) => {
    return (
        <button className="w-32 lg:w-44 p-1">
            <a href={link} target="blank">
                <img className="rounded-lg lg:rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={imageURL} />
            </a>
        </button>
    )
}