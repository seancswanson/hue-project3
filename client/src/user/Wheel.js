import React, {Component} from 'react';
import Profile from '../Profile';
import {SketchPicker} from 'react-color';
import ColorOptions from './ColorOptions';
import axios from 'axios';
import CompSquare from './CompSquare';

class Wheel extends Component {

	addDB = () => {
		let base = this
		console.log(base.props.selectedColor);
		console.log(this.props.user);
		axios.post('/saved', {
			selected: base.props.selectedColor,
			user: this.props.user
		}).then((result) => {
			console.log(result);
		}).catch((err) => {
			console.log('error', err);
		})
	}

	render(){
		let array1 = []
    	JSON.parse(this.props.saved).forEach(item => array1.push(item.selected));
    	if(!(this.props.selectedState) && this.props.colorsToAnalyze.length === 0){
    		return (<div className="div--container__wheel">
  			<ColorOptions handleComp={this.props.compCallback}/>
  			<SketchPicker onChangeComplete={this.props.handleAdd} color={this.props.selectedColor} presetColors={array1}/>
  			<button onClick={this.addDB} className="faves">Add to palette</button>
      </div>)
    	} else {
		return(
      <div className="div--container__wheel">
  			<SketchPicker onChangeComplete={this.props.handleAdd} color={this.props.selectedColor} presetColors={array1}/>
  			<button onClick={this.addDB} className="faves">Add to palette</button>
  			<ColorOptions handleComp={this.props.compCallback} tetradicCallback={this.props.tetradicCallback} triadicCallback={this.props.triadicCallback} analCallback={this.props.analCallback}/>
        {this.props.colorsToAnalyze.map( color => (
          <CompSquare renderWheelStoreColor={this.props.renderWheelStoreColor} background={color} />
          )
        )}
      </div>
		)
	}
}
}

export default Wheel;