import { FaReact } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const NavbarHeader = ( {children} ) => {
    return(
        <nav className="navbar">
            <a className="navbar__logo" href="#">
                <FaReact className="animate-spin w-10 h-10 text-blue-300"/>
            </a>
            

            <ul className="navbar__list">
                { children }
            </ul>
        </nav>
    );
}

export default NavbarHeader;
