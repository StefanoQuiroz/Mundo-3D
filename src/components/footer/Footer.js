import React from 'react';
import '../footer/footer.scss';
import { GiFalconMoon } from "react-icons/gi";
const Footer = () => {
    return (
        <footer>
            FalconDev <span role="img" aria-label="copy-right"> <GiFalconMoon style={{marginRight: "0.2rem"}}/>© 2021 </span>
            Joaquín Maurtúa - Stefano Quiroz
        </footer>
    );
}

export default Footer;
