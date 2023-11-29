
// import FooterColumn from "../components/Footer/Columns/FooterColumn";
import { Table } from "./table";
// import FooterColumnLink from "../components/Footer/Columns/FooterColumnLink";
// import Footer from "../components/Footer/Footer";
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
        {/* // <Footer title="Logo">
        //     <FooterColumn title="Secciones">
        //         <FooterColumnLink text="Inicio"/>
        //     </FooterColumn>
        //     <FooterColumn title="Politicas">
        //         <FooterColumnLink text="Historial de pedidos"/>
        //         <FooterColumnLink text="Política de Devoluciones"/>
        //         <FooterColumnLink text="Política de Privacidad"/>
        //         <FooterColumnLink text="Términos y Condiciones"/>
        //     </FooterColumn>
        //     <FooterColumn title="Ayuda">
        //         <FooterColumnLink text="Preguntas Frecuentes"/>
        //         <FooterColumnLink text="Contáctenos"/>
        //         <FooterColumnLink text="Acerca de Nosotros"/>
        //         <FooterColumnLink text="Blog"/>
        //         <FooterColumnLink text="Redes Sociales"/>
        //     </FooterColumn>
        // </Footer> */}
        </>
    );
}

export default Home;