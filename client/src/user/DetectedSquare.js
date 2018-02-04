import React, { Component } from 'react';

class DetectedSquare extends Component {

  storeVariableWithCallback = () =>{
    var colorToAnalyze = this.props.background.html_code;
    this.props.renderWheelStoreColor(colorToAnalyze)
  }
  
  render(){
    var divStyle = {
      backgroundColor: this.props.background.html_code,
      height: (this.props.background.percent)*2+20,
      width: 80
      }

    return(    
        <div className="div--container__detected">
          <h3 className="div--detected__h3">{this.props.background.percent} % </h3>
          <h3 className="div--detected__h3">{this.props.background.closest_palette_color}</h3>
          <div onClick={this.storeVariableWithCallback} className="div--image-color" style={divStyle}></div>
        </div> 
      )
    }
  }

  export default DetectedSquare;