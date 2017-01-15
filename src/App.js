import React, { Component } from 'react';
import Header from './component/header/Header.jsx';
import Container from './component/container/Container.jsx';
import Footer from './component/footer/Footer.jsx'

import './index.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />

      </div>
    );
  }
}

export default App;
