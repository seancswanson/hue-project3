import React, { Component } from 'react';
import rgbToHex from 'rgb-to-hex';
import parseRgb from 'parse-rgb';



class CompSquare extends Component {

  storeVariableWithCallback = () =>{
    var colorToAnalyze = rgbToHex(`'rgb(${this.props.background.r},${this.props.background.g},${this.props.background.b})`);
    this.props.renderWheelStoreColor(colorToAnalyze)
  }

  render(){
    return(    
        <div className="div--image__comp">
          <div className="div--image-color" style={{backgroundColor: 'rgb(' + this.props.background.r + ","+ this.props.background.g + ","+ this.props.background.b + ')'}} onClick={this.storeVariableWithCallback}></div>
        </div> 
        )
      }
  }

  export default CompSquare;