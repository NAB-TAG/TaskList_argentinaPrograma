
import FooterColumn from "../components/Footer/Columns/FooterColumn";
import { Table } from "./table";
import FooterColumnLink from "../components/Footer/Columns/FooterColumnLink";
import Footer from "../components/Footer/Footer";

// import Header from "../components/Header/Header";
// import NavbarHeader from "../components/Header/NavbarHeader";
// import NavbarLinkHeader from "../components/Header/NavbarLinkHeader";

const Home = () => {
    return(
        <>
        <div>
            <div className="w-full h-auto flex justify-center">
                <div className="w-full p-2">
                    <Table />
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Home;