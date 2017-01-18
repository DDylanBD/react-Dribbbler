import React, {Component} from 'react';
import './MenuResponsive.css';

class MenuResponsive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const stylesMenu = {
          borderTop: '1px solid rgba(255,255,255,0.08)',
          height:"40px",
        }
        return (
            <div className='MenuResponsive'>
                <img onClick={this.handleClick} className='imgMenuResponsive' src='https://d13yacurqjgara.cloudfront.net/assets/icon-hamburger-81081334c82d4efd0892cd8d11a37e0fc36874131c243994f36f3e783216d7b2.png?4'/> {this.state.isToggleOn
                    ? ''
                    : <div className='container-menu'>
                        <ul>
                            <li>
                            <input placeholder="Search" className='inputMenu'></input>
                        </li>
                            <li style={stylesMenu}>Shots</li>
                            <li style={stylesMenu}>Designers</li>
                            <li style={stylesMenu}>Teams</li> <li style={stylesMenu}>Community</li> <li style={stylesMenu}>Jobs</li> <li style={stylesMenu}>More</li>
                        </ul>
                    </div>
}
            </div>

        );
    }

}
export default MenuResponsive;
