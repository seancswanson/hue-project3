import React, { Component } from 'react';
import rgbToHex from 'rgb-to-hex';



class CompSquare extends Component {

  storeVariableWithCallback = () =>{
    var colorToAnalyze = rgbToHex(`'rgb(${this.props.background.r},${this.props.background.g},${this.props.background.b})`);
    colorToAnalyze = `#${colorToAnalyze}`;
    this.props.renderWheelStoreColor(colorToAnalyze)
  }

  render(){
    return(    
          <div className="div--image-color" style={{backgroundColor: 'rgb(' + this.props.background.r + ","+ this.props.background.g + ","+ this.props.background.b + ')'}} onClick={this.storeVariableWithCallback}></div>
        )
      }
  }

  export default CompSquare;