import React, {Component} from "react";
import './styles.scss';
import PropTypes from 'prop-types';
import imageMovie from './image-1.jpg';
import Popup from "../Popup/Popup";

class MovieItem extends Component {
    constructor() {
        super();
        this.state = {
            isOpenDeletePopup: false,
            isOpenEditPopup: false
        }
    }
    toggleOpenDeletePopup = () => {
        this.setState({
            isOpenDeletePopup: !this.state.isOpenDeletePopup
        })
    }
    toggleOpenEditPopup = () => {
        this.setState({
            isOpenEditPopup: !this.state.isOpenEditPopup
        })
    }
    render() {
        return (
            <>
                <div className='movie-item'>
                    <div className='item-image'>
                        <img src={imageMovie} alt=""/>
                    </div>
                    <div className='item-text'>
                        <div className='item-info'>
                            <div className='item-title'>
                                {this.props.title}
                            </div>
                            <div className='item-description'>
                                {this.props.description}
                            </div>
                        </div>
                        <div className='item-year'>
                            {this.props.year}
                        </div>
                    </div>
                    <div className='item-actions'>
                        <ul>
                            <li onClick={this.toggleOpenEditPopup}>Edit</li>
                            <li onClick={this.toggleOpenDeletePopup}>Delete</li>
                        </ul>
                    </div>
                    <Popup extraClass='small' isOpen={this.state.isOpenDeletePopup} toggleOpen={this.toggleOpenDeletePopup}>
                        <>
                            <div className='popup-title'>Delete MOVIE</div>
                            <form action="">
                                <p>Are you sure you want to delete this movie?</p>
                                <div className='toolbar-actions'>
                                    <button className='button-primary' onClick={() => this.props.removeMovie(this.props.id)}>confirm</button>
                                </div>
                            </form>
                        </>
                    </Popup>
                    <Popup isOpen={this.state.isOpenEditPopup} toggleOpen={this.toggleOpenEditPopup}>
                        <>
                            <div className='popup-title'>EDIT MOVIE</div>
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
                </div>
            </>
        )
    }
}

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    year: PropTypes.string
}

export default MovieItem;