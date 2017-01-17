import React, {Component} from 'react';
import '../Header.css';

class HeaderMiddle extends Component {
    render() {
        return (
            <div className='contenaireSousHeader'>
                <h1 className='Description'>
                    <strong>What are you working on ?</strong>
                    Dribbble is show and tell for designers.
                </h1>
                <div className='btnHeader'>
                    <a href='#' className='btn'>Learn more</a>
                    <a href='#' className='btn pink'>Sign up</a>
                </div>
            </div>
        )
    }
}

export default HeaderMiddle;
