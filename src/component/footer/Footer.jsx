import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='containerFooter'>
                <div className='footer-inner'>
                    <div className='container-flex'>
                        <div>
                            <img className='imgFooter' src='https://d13yacurqjgara.cloudfront.net/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png'/>
                            <p className='x9078'>Show and tell for designers</p>
                            <p className='about'>What are you working on? Dribbble is a community of designers sharing screenshots of their work, process, and projects.</p>
                        </div>
                        <div className="footer-mod">
                            <ul className='links'>
                                <li>About</li>
                                <li>Help</li>
                                <li>Contact</li>
                                <li>Terms</li>
                                <li>Guidelines</li>
                                <li>Privacy</li>
                                <li>Shop</li>
                                <li>Testimonials</li>
                                <li>Brand</li>
                                <li>Advertise</li>
                                <li>API</li>
                                <li>Integrations</li>
                            </ul>
                        </div>
                        <div className='job'>
                            <h3>Jobs for Designers</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img className='imgJobs' src='https://d13yacurqjgara.cloudfront.net/users/504231/avatars/normal/025e89256fd4ccf43ae7c4783a7d72fb.png?1483655729'/>
                                    </a>
                                    <div>
                                        <a>Getaround</a>
                                        <p>Senior Product Designer</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">
                                        <img className='imgJobs' src='https://d13yacurqjgara.cloudfront.net/users/417580/avatars/normal/579ce11e04cfbbce70fd2dc70f20fd0f.png?1483990293'/>
                                    </a>
                                    <div>
                                        <a>Articulate</a>
                                        <p>UX Designer</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Copyright'>
                    <p>
                        Copyright © 2009–2017 Dribbble LLC. All screenshots © their respective owners. Shipped from Salem, Mass. USA.
                    </p>
                    <p className='follow'>
                        <a href="/dribbble"><img src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-dribbble-8706862cdb0afa7f43f9e0218b073515f0a2bef19780961d324ae4620ebe249b.png" alt="Icon team dribbble" width="24"/></a>
                        <a href="http://twitter.com/dribbble"><img src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-twitter-1fa6921d96b16e47f00ad0381ebbab59ba089c22b21f9bce783c9a4a077f40e9.png" alt="Icon team twitter" width="24"/></a>
                        <a href="http://facebook.com/dribbble"><img src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-facebook-4d63851997b88eb903858057327d93df9f950a55c5104a3a19206f2005682ea3.png" alt="Icon team facebook" width="24"/></a>
                        <a href="http://instagram.com/dribbble"><img src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-instagram-5dfdcd1478ea4a1c1e109b32adbd3878062aa1eb571da63ac379e0da1d2d5762.png" alt="Icon team instagram" width="24"/></a>
                        <a href="/stories">
                            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-blog-2705adcb7ee6522051e175d10683208f0fa0ad17daa15fdf3f36aca99c540312.png" alt="Icon team blog" width="24"/>
                        </a>
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;
