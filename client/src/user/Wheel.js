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

	handleAdd = () => {
		this.setState({selected: '#000000'}, this.handleDB);
	}

	handleDB = () => {
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

	render(){
		let array1 = []
		console.log(this.props.saved);
    	JSON.parse(this.props.saved).forEach(item => array1.push(item.selected));
		return(
      <div className="div--container__wheel">
  			<h1>Wheel!</h1>
  			<SketchPicker presetColors={array1}/>
  			<button onClick={this.handleAdd} className="faves">Add to palette</button>
      </div>
		)
	}
}

export default Wheel;