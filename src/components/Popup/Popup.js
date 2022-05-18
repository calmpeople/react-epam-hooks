import React from "react";
import './styles.scss';

function Popup(props) {
    const openClass = props.isOpen ? 'popup-wr open' : 'popup-wr';
    const popupContentClass = props.extraClass ? `${props.extraClass} popup-bl` : 'popup-bl';
    return (
        <div className={openClass}>
            <div className={popupContentClass}>
                <div className='popup-content'>
                    {props.children}
                </div>
                <div className='popup-close' onClick={props.toggleOpen}></div>
            </div>
        </div>
    )
}

export default Popup;