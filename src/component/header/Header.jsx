import React, {Component} from 'react';
import HeaderTop from './componentHeader/HeaderTop.jsx';
import HeaderMiddle from './componentHeader/HeaderMiddle.jsx';
import HeaderBottom from './componentHeader/HeaderBottom.jsx';

class Header extends Component{
  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderMiddle/>
        <HeaderBottom />
      </div>
    )
  }
}
export default Header
