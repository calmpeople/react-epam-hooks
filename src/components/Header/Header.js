import React from "react";
import './styles.scss'

function Header(props) {
    return (
        <header>
            <div className='logo'><a href='/'><strong>netflix</strong>roulette</a></div>
            <div className='add-movie-button' onClick={props.toggleOpen}>+ add movie</div>
        </header>
    )
}

export default Header;