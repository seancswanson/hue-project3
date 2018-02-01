import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class ColorOptions extends Component {
	render(){
		return(
			<DropdownButton>
				<MenuItem>1</MenuItem>
				<MenuItem>2</MenuItem>
				<MenuItem>3</MenuItem>
			</DropdownButton>
		)
	}
}

export default ColorOptions;