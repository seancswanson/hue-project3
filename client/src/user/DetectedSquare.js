import React, { Component } from 'react';

class DetectedSquare extends Component {

  storeVariableWithCallback = () =>{
    var colorToAnalyze = this.props.background.html_code;
    this.props.renderWheelStoreColor(colorToAnalyze)
  }

  render(){
    return(    
        <div>
          <h1 className="h1--detected__percent">{this.props.background.percent} % {this.props.background.closest_palette_color}</h1>
          <div onClick={this.storeVariableWithCallback} className="div--image-color" style={{backgroundColor: this.props.background.html_code}}></div>
        </div> 
        )
      }
  }

  export default DetectedSquare;