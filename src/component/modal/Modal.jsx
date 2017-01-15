import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
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
        return (
            <div className='modalOnclick'>

              {this.state.isToggleOn ? <a className='openModal' onClick={this.handleClick}>{this.props.overlay}</a> :
                <div id="overlay">
                    <div className='modal'>
                        <a href="#noWhere" onClick={this.handleClick}>X</a>
                        <div className='modal-content'>
                            <div className='profilModal'>
                                <img className='miniImgModal' src={this.props.miniImgModal} />
                                <div>
                                    <h1>{this.props.h1Modal}</h1>
                                    <h3>{this.props.h3Modal}
                                    </h3>
                                </div>
                            </div>
                            <div className='containerModal2'>
                                <div className='modalImg'>
                                    <div className='styleImg'>
                                        <img src={this.props.imgModal}/>
                                    </div>
                                </div>
                                <div className='inforImg'>
                                    <div className='inforBottom'>
                                        <p>Share</p>
                                        <p>{this.props.views}
                                            views</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              }
            </div>
        );
    }
}
export default Modal;
