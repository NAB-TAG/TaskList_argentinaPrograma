const FooterColumn = ({title, children}) => {
    return(
        <ul className="col-md-3">
            <h5 className="mb-2">{title}</h5>
            {children}
        </ul>
    );
}
export default FooterColumn