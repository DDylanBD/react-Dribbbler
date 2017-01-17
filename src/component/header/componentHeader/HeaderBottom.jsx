import React, {Component} from 'react';
import '../Header.css';
import Dropdown from '../dropdown/Dropdown.jsx';

class HeaderBottom extends Component {
    render() {
        return (
            <div className='contenaireBottom'>
                <ul className='ulHeaderBottom'>
                    <li>Popular
                        <img src='https://d13yacurqjgara.cloudfront.net/assets/icon-dd-arrow-5cd53c3f7d2d5232122f093985affef2493f0e1b8af5cdc559180fdeff62366c.png'/>
                        <Dropdown drop1='Recent' drop2='Most Viewed' drop3='Most Commented'/>
                    </li>
                    <li>Shots
                        <img src='https://d13yacurqjgara.cloudfront.net/assets/icon-dd-arrow-5cd53c3f7d2d5232122f093985affef2493f0e1b8af5cdc559180fdeff62366c.png'/>
                        <Dropdown drop1='Debuts' drop2='Team Shots' drop3='Playoffs' drop4='Rebounds' drop5='Animated GIFs' drop6='Shots with Attachments'/>
                    </li>
                    <li>Now
                        <img src='https://d13yacurqjgara.cloudfront.net/assets/icon-dd-arrow-5cd53c3f7d2d5232122f093985affef2493f0e1b8af5cdc559180fdeff62366c.png'/>
                        <Dropdown drop1='This Past Week' drop2='This Past Month' drop3='This Past Year'
                        drop4='All Time'/>
                    </li>
                </ul>
            </div>
        );
    }

}
export default HeaderBottom;
