import React, {Component} from 'react';
import Modal from '../modal/Modal.jsx';
import './Container.css';

class ContainerInfor extends Component {
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
        const styles = {
            fontSize: '11px'
        }
        const stylesImg = {
            width: "10%",
            height: "10%"
        }
        return (
            <div className='grid'>
                <span className='zerteur'>
                    <strong>{this.props.titreDescription}</strong>
                    <span style={styles}>
                        {this.props.description}
                        <Modal overlay={this.props.overlay} h1Modal={this.props.h1Modal} h3Modal={this.props.h3Modal} imgModal={this.props.imgModal} views={this.props.views} miniImgModal={this.props.miniImgModal}/></span>
                </span>
                <img className='imgazer' src={this.props.img}/>
                <ul className='InforGrid liste'>
                    <li className='view'>{this.props.infor1}</li>
                    <li className='commentaire'>{this.props.infor2}</li>
                    <li>
                        <a className='coeur' onClick={this.handleClick}>{this.state.isToggleOn
                                ? this.props.infor3
                                : +this.props.infor3 +1}</a>
                    </li>
                </ul>
                <img style={stylesImg} className="informationImg" src={this.props.imgIcon}/>
                <a href='#' className="informationImg1">{this.props.inforImg}</a>
            </div>
        );
    }
}

export default ContainerInfor;
