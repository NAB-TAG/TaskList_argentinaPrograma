// eslint-disable-next-line react/prop-types
const FooterColumnLink = ({ text, href = '#'}) => {
    return(
        <li>
            <a href={ href }>
                { text }
            </a>
        </li>
    );
}

export default FooterColumnLink