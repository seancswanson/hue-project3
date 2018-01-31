import React, {Component} from 'react';
import Profile from '../Profile';
import axios from 'axios';

class Wheel extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: ''
		}
	}

	handleAdd = () => {
		this.setState({selected: 'second'}, this.handleDB);
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
		})
	}

	render(){
		return(
      <div className="div--container__wheel">
  			<h1>Wheel!</h1>
  			<button onClick={this.handleAdd} className="faves">Add to palette</button>
      </div>
		)
	}
}

export default Wheel;