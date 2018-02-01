import React, {Component} from 'react';
import Profile from '../Profile';
import {SketchPicker} from 'react-color';
import axios from 'axios';

class Wheel extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: ''
		}
	}



	handleDB = () => {
		let base = this
		console.log(base.props.selectedColor);
		console.log(this.props.user);
		axios.post('/saved', {
			selected: base.props.selectedColor,
			user: this.props.user
		}).then((response) => {
			console.log(response);
			this.props.callback;
		})
	}

	render(){
		let array1 = []
		console.log(this.props.saved);
    	JSON.parse(this.props.saved).forEach(item => array1.push(item.selected));
		return(
      <div className="div--container__wheel">
  			<h1>Wheel!</h1>
  			<SketchPicker onChangeComplete={this.props.handleAdd} color={this.props.selectedColor} presetColors={array1}/>
  			<button onClick={this.handleDB} className="faves">Add to palette</button>
      </div>
		)
	}
}

export default Wheel;