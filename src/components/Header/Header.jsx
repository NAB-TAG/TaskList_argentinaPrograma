import './Header.css'
// eslint-disable-next-line react/prop-types
const Header = ( {children} ) => {
    return(
        <header>
            { children }
        </header>
    );
}

export default Header;