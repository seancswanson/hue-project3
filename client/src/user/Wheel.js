import React, {Component} from 'react';
import Profile from '../Profile';
import {SketchPicker} from 'react-color';
import ColorOptions from './ColorOptions';
import axios from 'axios';

class Wheel extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: '',
		}
	}

	handleAdd = (color) => {
		this.setState({selected: color.hex});
		console.log(this.props.starting);
	}

	addDB = () => {
		let base = this
		console.log(base.state.selected);
		console.log(this.props.user);
		axios.post('/saved', {
			selected: base.state.selected,
			user: this.props.user
		}).then((response) => {
			console.log(response);
			this.props.callback;
		})
	}

	// removeDB = () => {
	// 	console.log('got to delete axios');		
	// 	axios.delete('/saved', {
	// 		selected: this.state.selected,
	// 		user: this.props.user
	// 	}).then((response) => {
	// 		console.log(response);
	// 	})
	// }

	render(){
		let array1 = []
		console.log(this.props.saved);
    	JSON.parse(this.props.saved).forEach(item => array1.push(item.selected));
		return(
      <div className="div--container__wheel">
  			<h1>Wheel!</h1>
  			<SketchPicker onChangeComplete={this.handleAdd} color={this.state.selected} presetColors={array1}/>
  			<button onClick={this.addDB} className="faves">Add to palette</button>
  			<button onClick={this.removeDB}>Remove from palette</button>
  			<ColorOptions />
      </div>
		)
	}
}

export default Wheel;