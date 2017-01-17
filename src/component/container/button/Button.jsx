import React, {Component} from 'react';
import './Button.css';


class Button extends Component {
    render() {
        return (
            <div className='buttonContainer'>
                <p className='btnContainer'>Sign up to continue</p>

                <div className='btnContainer1'>
                <p className='sign'>or sign in</p></div>
            </div>
        )
    }
}

export default Button;
