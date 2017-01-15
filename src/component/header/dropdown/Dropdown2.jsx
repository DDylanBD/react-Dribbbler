import React, {Component} from 'react';
import '../Header.css';


class Dropdown2 extends Component {
    render() {
    const styles = {
          paddingLeft: "5px",
          paddingTop: "5px",
      };
        return (
            <div className='dropdown2'>
                <p style={styles}>{this.props.drop1}</p>
                <p style={styles}>{this.props.drop2}</p>
                <p style={styles}>{this.props.drop3}</p>
                <p style={styles}>{this.props.drop4}</p>
                <p style={styles}>{this.props.drop5}</p>
                <p style={styles}>{this.props.drop6}</p>
                <p style={styles}>{this.props.drop7}</p>
                <p style={styles}>{this.props.drop8}</p>
                <p style={styles}>{this.props.drop9}</p>
                <p style={styles}>{this.props.drop10}</p>

            </div>
        )
    }

}
export default Dropdown2;
