import React, {Component} from 'react';
import '../Header.css';


class Dropdown extends Component {
    render() {
    const styles = {
          paddingLeft: "5px",
          paddingTop: "5px",
      };
        return (
            <div className='dropdown'>
                <p style={styles}>{this.props.drop1}</p>
                <p style={styles}>{this.props.drop2}</p>
                <p style={styles}>{this.props.drop3}</p>
                <p style={styles}>{this.props.drop4}</p>
                <p style={styles}>{this.props.drop5}</p>
                <p style={styles}>{this.props.drop6}</p>

            </div>

        )
    }

}
export default Dropdown;
