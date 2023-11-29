import { IoMdHome } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const NavbarLinkHeader = ({href }) => {
    return (
        <li className="navbar__list--item">
            <a href={href}>
                <IoMdHome  className="w-10 h-10 text-blue-900"/>
            </a>
        </li>
    );
}

export default NavbarLinkHeader