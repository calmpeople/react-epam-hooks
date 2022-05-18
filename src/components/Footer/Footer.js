import React from "react";
import './styles.scss';

function Footer(props) {
    return (
        <footer>
            {props.children}
        </footer>
    )
}

export default Footer;