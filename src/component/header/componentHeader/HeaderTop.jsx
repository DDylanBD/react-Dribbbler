import React, {Component} from 'react';
import '../Header.css';
import '../menuResponsive/MenuResponsive.css';
import MenuResponsive from '../menuResponsive/MenuResponsive.jsx';
import Dropdown2 from '../dropdown/Dropdown2.jsx';

class HeaderTop extends Component {
    render() {
        return (
            <div className='contenaire'>
            <MenuResponsive/>
                <div className='contImage'>
                    <img className='imgHeader' src='https://d13yacurqjgara.cloudfront.net/assets/logo-small-4612353cefa78dfe35ba5e8e9d35da9f9305a3a516ef9675b5c37004c5862b6d.png'/>
                </div>
                <ul className='navigation'>
                    <li>Shots
                        <Dropdown2 drop1='Popular' drop2='Recent' drop3='Debuts' drop4='Teams' drop5='Playoffs' drop6='Highlights' drop7='Projects' drop8='Goods by Designers'/>
                    </li>
                    <li>Designers
                        <Dropdown2 drop1='All' drop2=' For Hire' drop3='Community'/>
                    </li>
                    <li>Teams
                        <Dropdown2 drop1='All' drop2='Hiring Designers' drop3='Design Teams for Hire' drop4='Add Your Design Team'/>
                    </li>
                    <li>Community
                        <Dropdown2 drop1='Places' drop2='Meetups' drop3='Stories' drop4='Podcast' drop5='Testimonials' drop6='Guidelines'/></li>
                    <li>Jobs
                        <Dropdown2 drop1='All' drop2='Remote / Anywhere' drop3='Teams Hiring' drop4='Post a Job'/>
                    </li>
                    <li><img src='https://d13yacurqjgara.cloudfront.net/assets/icon-more-dots-8624bddd5cc1950979b7c8dc571cf95d0e314600a9f8e43d99a17b57877808b6.png'/>
                        <Dropdown2 drop1='About' drop2='Shop' drop3='Support' drop4='Buckets' drop5='Colors' drop6='Tags' drop7='Training' drop8='Twitter' drop9='Facebook' drop10='Integrations'/>
                    </li>
                </ul>
                <ul className='contImage2'>
                    <li>Sign up</li>
                    <li className='none'>Sign in</li>
                    <input placeholder="Search " className='none'></input>
                </ul>
            </div>
        )
    }
}
export default HeaderTop;
