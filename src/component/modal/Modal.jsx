import React, {Component} from 'react';
import './Modal.css';
import ContainerInfor from '../container/ContainerInfor.jsx';

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

                {this.state.isToggleOn
                    ? <a className='openModal' onClick={this.handleClick}>{this.props.overlay}</a>
                    : <div id="overlay">
                        <div className='modal'>
                            <a href="#" className='close' onClick={this.handleClick}>X</a>
                            <div className='modal-content'>
                                <div className='profilModal'>
                                    <img className='miniImgModal' src={this.props.miniImgModal}/>
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
                                        <div className='inforBottomShare'>
                                            <p>
                                                <img src='https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-share-128ae71c26985fc7325ac5362aba434686f12fdfffa45ed874262a19f923b071.png'/>
                                                    Share</p>
                                                <p>{this.props.views}
                                                    views</p>
                                            </div>
                                            <div className='inforBottomLikes'>
                                                <p>Likes</p>
                                                <p>{this.props.likeModal}coeurs</p>
                                            </div>
                                            <ul className='color'>
                                              <li className='colorImg'><img src='https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-drop-0152bfcbd3cb7ed50e73b830df47c754f061a376a662eac8841ad45316598d97.png'/></li>
                                              <li style={{backgroundColor:'black'}}></li>
                                              <li style={{backgroundColor:'red'}}></li>
                                              <li style={{backgroundColor: 'green'}}></li>
                                              <li style={{backgroundColor: 'yellow'}}></li>
                                              <li style={{backgroundColor:'blue'}}></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
            </div>
        );
    }
}
export default Modal;
