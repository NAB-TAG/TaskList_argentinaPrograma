
const NavbarHeader = ( {children} ) => {
    return(
        <nav className="navbar">
            <a className="navbar__logo" href="#">LOGO</a>

            <ul className="navbar__list">
                { children }
            </ul>
        </nav>
    );
}

export default NavbarHeader;
