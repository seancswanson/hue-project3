import React, { Component } from 'react';

class CompSquare extends Component {

  // storeVariableWithCallback = () =>{
  //   var colorToAnalyze = this.props.background.html_code;
  //   this.props.renderWheelStoreColor(colorToAnalyze)
  // }

  render(){
    return(    
        <div>
          <div className="div--image-color" style={{backgroundColor: 'rgb(' + this.props.background.r + ","+ this.props.background.g + ","+ this.props.background.b + ')'}}></div>
        </div> 
        )
      }
  }

  export default CompSquare;