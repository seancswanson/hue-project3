import React, {Component} from 'react';
import Profile from '../Profile';

class Palette extends Component {
	render(){
		let array1 = []
		console.log(this.props.saved);
    	JSON.parse(this.props.saved).forEach(item => array1.push(item.selected))
		return(
			<div>
				{array1}
			</div>
		)
	}
}

export default Palette;