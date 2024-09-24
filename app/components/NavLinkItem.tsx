import { NavLink } from "@remix-run/react"

type NavLinkItemProps = {
    text: String;
}

export const NavLinkItem = ({text}: NavLinkItemProps) => {
    return (
        <NavLink
        to="/"
        className={"mx-5 font-bold text-gray-500"}>
        {text}
      </NavLink>
    )
}