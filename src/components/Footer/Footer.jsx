
import './Footer.css'
const Footer = ({title, children}) => {
    return(
        <footer >
            <div className="">

                <div className="footer__header container">
                    <div className="d-flex justify-content-between w-100 m-auto">

                        <a href="#">
                            <h2>{ title }</h2>
                        </a>
                        <div className="footer__header--logos">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer__header--right-label"><div></div></div>
                    <div className="footer__header--left-label"><div></div></div>
                </div>
                    <hr />
                <div className="footer__links w-100 container">
                    <div className="row">

                        {children}
                        
                        <ul className="col-md-3">
                            <h5>Registra tu email para recibir novedades y cupones gratis</h5>
                            <form action="">
                                <input type="email" placeholder='Ingresa tu emal'/>
                                <input type="submit" />
                            </form>
                        </ul>
                    </div>
                </div>

                <div className="footer__footer container">
                   <p>Copyright 2023. Todos los derechos reservados</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;