import Header from "../components/Header/Header";
import NavbarHeader from "../components/Header/NavbarHeader";
import NavbarLinkHeader from "../components/Header/NavbarLinkHeader";

const Home = () => {
    return(
        <Header>
            <NavbarHeader>
                <NavbarLinkHeader name="Inicio" href="#"/>
            </NavbarHeader>
        </Header>
    );
}

export default Home;