import React, {Component} from 'react';
import Profile from '../Profile';
import {SketchPicker} from 'react-color';
import ColorOptions from './ColorOptions';
import axios from 'axios';
import CompSquare from './CompSquare';

class Wheel extends Component {
	constructor(props){
		super(props);
		this.state = {
			added: false,
		}
	}

	componentDidMount(){
		this.addDB();
	}

	addDB = () => {
		let base = this
		console.log(base.props.selectedColor);
		console.log(this.props.user);
		axios.post('/saved', {
			selected: base.props.selectedColor,
			user: this.props.user
		}).then((response) => {
			console.log(response);
			this.props.updateUser();
		}).catch((err) => {
			console.log('error', err);
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
    	JSON.parse(this.props.saved).forEach(item => array1.push(item.selected));
    	if(!(this.props.selectedState) && this.props.colorsToAnalyze.length === 0){
    		return (<div className="div--container__wheel">
  			<h1>Wheel!</h1>
  			<SketchPicker onChangeComplete={this.props.handleAdd} color={this.props.selectedColor} presetColors={array1}/>
  			<button onClick={this.addDB} className="faves">Add to palette</button>
  			<ColorOptions handleComp={this.props.compCallback}/>
      </div>)
    	} else {
		return(
      <div className="div--container__wheel">
  			<h1>Wheel!</h1>
  			<SketchPicker onChangeComplete={this.props.handleAdd} color={this.props.selectedColor} presetColors={array1}/>
  			<button onClick={this.addDB} className="faves">Add to palette</button>
  			<ColorOptions handleComp={this.props.compCallback} tetradicCallback={this.props.tetradicCallback} triadicCallback={this.props.triadicCallback} analCallback={this.props.analCallback}/>
        {this.props.colorsToAnalyze.map( color => (
          <CompSquare background={color} />
          )
        )}
      </div>
		)
	}
}
}

export default Wheel;