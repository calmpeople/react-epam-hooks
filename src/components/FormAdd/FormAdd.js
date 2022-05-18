import React from "react";
import Popup from "../Popup/Popup";
import '../forms.scss';

function FormAdd(props) {
    return (
        <Popup isOpen={props.isOpen} toggleOpen={props.toggleOpen}>
            <>
                <div className='popup-title'>Add movie</div>
                <form action="">
                    <div className='fieldset fieldset-two'>
                        <div className='field'>
                            <label htmlFor="field-title">Title</label>
                            <input id='field-title' type="text" placeholder='Enter your title' />
                        </div>
                        <div className='field'>
                            <label htmlFor="field-date">RELEASE DATE</label>
                            <input id='field-date' type="date" placeholder='Select Date' />
                        </div>
                    </div>
                    <div className='fieldset fieldset-two'>
                        <div className='field'>
                            <label htmlFor="field-url">movie url</label>
                            <input id='field-url' type="text" placeholder='https://' />
                        </div>
                        <div className='field'>
                            <label htmlFor="field-rating">RATING</label>
                            <input id='field-rating' type="text" placeholder='7.8' />
                        </div>
                    </div>
                    <div className='fieldset fieldset-two'>
                        <div className='field'>
                            <label htmlFor="field-genre">genre</label>
                            <select name="genre" id="field-genre">
                                <option value="1">Select Genre</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className='field'>
                            <label htmlFor="field-runtime">RUNTIME</label>
                            <input id='field-runtime' type="text" placeholder='minutes' />
                        </div>
                    </div>
                    <div className='fieldset'>
                        <div className='field'>
                            <label htmlFor="field-overview">OVERVIEW</label>
                            <textarea id='field-overview' placeholder='Movie description' />
                        </div>
                    </div>
                    <div className='toolbar-actions'>
                        <button className='button-secondary'>reset</button>
                        <button className='button-primary'>submit</button>
                    </div>
                </form>
            </>
        </Popup>
    )
}

export default FormAdd;