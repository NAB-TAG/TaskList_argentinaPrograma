const NavbarLinkHeader = ({ name, href }) => {
    return(
        <li className="navbar__list--item">
            <a href={ href }>{ name }</a>
        </li>
    );
}

export default NavbarLinkHeader