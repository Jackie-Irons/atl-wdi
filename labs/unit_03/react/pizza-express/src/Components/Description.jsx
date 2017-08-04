import React, {Component}  from 'react';

class Description extends Component{
	render(){
		return(
			<div className="description">
          <div>{this.props.data.name}</div>
          <p>{this.props.data.address}</p>
          <p>{this.props.data.phone}</p>
        </div>
        );
    }
}
export default Description;