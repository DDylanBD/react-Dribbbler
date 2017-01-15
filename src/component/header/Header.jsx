import React, {Component} from 'react';
import HeaderTop from './/HeaderTop.jsx';
import HeaderMiddle from './/HeaderMiddle.jsx';
import HeaderBottom from './/HeaderBottom.jsx';

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
