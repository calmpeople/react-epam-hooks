import React from "react";
import './styles.scss';

function MainContent(props) {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default MainContent;