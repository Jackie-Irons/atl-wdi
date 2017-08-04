import React, {Component} from 'react';

class Contact extends Component {
	render(){
		return (
			<div className="contact">
          <div>{this.props.data.name}</div>
          <p>{this.props.data.address}</p>
          <p>{this.props.data.phone}</p>
        </div>
        );
    }
}



export default Contact