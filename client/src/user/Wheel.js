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
			saved: JSON.parse(this.props.saved).map(item => {return item.selected})
		}
	}


	addDB = () => {
		let base = this
		console.log(base.props.selectedColor);
		console.log(this.props.user);
		axios.post('/saved', {
			selected: base.props.selectedColor,
			user: this.props.user
		}).then((result) => {
			console.log(result);
			console.log('saved', base.props.selectedColor);
			let newSaved = this.state.saved;
			newSaved.push(base.props.selectedColor);
			console.log('new state', newSaved);
			this.setState({ saved: newSaved });
		}).catch((err) => {
			console.log('error', err);
		})
	}

	removeFromDB = () => {
		let base = this
		axios.delete('/saved', {
			selected: base.props.selectedColor,
			user: this.props.user
		}).then((result) => {
			console.log(result);
			console.log('saved', base.props.selectedColor);
			let newSaved = this.state.saved;
			newSaved.pop(base.props.selectedColor);
			console.log('new state', newSaved);
			this.setState({ saved: newSaved });
		}).catch((err) => {
			console.log('error', err);
		})
	}

	render(){
		let array1 = []
    	JSON.parse(this.props.saved).forEach(item => array1.push(item.selected));
    	if(!(this.props.selectedState) && this.props.colorsToAnalyze.length === 0){
    		return (<div className="div--container__wheel">
  			<SketchPicker onChangeComplete={this.props.handleAdd} color={this.props.selectedColor} presetColors={this.state.saved}/>
  			<h2>Pick a color...any color</h2>
      </div>)
    	} else {
		return(
      <div className="div--container__wheel">
  			<SketchPicker onChangeComplete={this.props.handleAdd} color={this.props.selectedColor} presetColors={this.state.saved}/>
  			<button onClick={this.addDB} className="faves">Add to palette</button>
  			<button onClick={this.removeFromDB} className="faves">Remove from palette</button>
        <div className="div--container__coloroptions">
  			<ColorOptions handleComp={this.props.compCallback} tetradicCallback={this.props.tetradicCallback} triadicCallback={this.props.triadicCallback} analCallback={this.props.analCallback}/>
        </div>
        <div className="div--container__analyzedcolors">
        {this.props.colorsToAnalyze.map( color => (
          <CompSquare renderWheelStoreColor={this.props.renderWheelStoreColor} background={color} />
          )
        )}
        </div>
      </div>
		)
	}
}
}

export default Wheel;