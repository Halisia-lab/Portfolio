import { NavLink } from "@remix-run/react"

type NavLinkItemProps = {
    text: String;
    path: String;
    onClick?: ()=>void;
}

export const NavLinkItem = ({text, path, onClick}: NavLinkItemProps) => {
    return (
        <NavLink
        onClick={onClick ? ()=>onClick() : undefined}
        to={path.toString()}
        className={"mx-5 font-medium text-gray-500"}>
        {text}
      </NavLink>
    )
}