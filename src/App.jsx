
// Importo bootstrap y fontawesome
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import FooterColumn from './components/Footer/Columns/FooterColumn';
import FooterColumnLink from './components/Footer/Columns/FooterColumnLink';
import Header from './components/Header/Header'
import NavbarHeader from './components/Header/NavbarHeader'
import NavbarLinkHeader from './components/Header/NavbarLinkHeader'

function App() {
  return (
    <>
    <div className='w-full h-10 fixed z-10'>
    <Header>
        <NavbarHeader>
          <NavbarLinkHeader href='#' />
        </NavbarHeader>
      </Header>
    </div>
    <div className='w-full h-10'>
    </div>
      
      <div className='w-full mt-5'>
        <div className='bg-white lg:w-1/2 mx-auto border-2 rounded-2xl p-5 shadow-lg'>
          <Home />
        </div>

      </div>

      <Footer>
        <FooterColumn title="Secciones">
          <FooterColumnLink text="Inicio" />
        </FooterColumn>
        <FooterColumn title="Politicas">
          <FooterColumnLink text="Historial de pedidos" />
          <FooterColumnLink text="Política de Devoluciones" />
          <FooterColumnLink text="Política de Privacidad" />
          <FooterColumnLink text="Términos y Condiciones" />
        </FooterColumn>
        <FooterColumn title="Ayuda">
          <FooterColumnLink text="Preguntas Frecuentes" />
          <FooterColumnLink text="Contáctenos" />
          <FooterColumnLink text="Acerca de Nosotros" />
          <FooterColumnLink text="Blog" />
          <FooterColumnLink text="Redes Sociales" />
        </FooterColumn>
      </Footer>
    </>
  )
}

export default App
