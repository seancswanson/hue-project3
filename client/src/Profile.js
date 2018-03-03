import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Upload from './user/Upload';
import Wheel from './user/Wheel';
import complementaryColors from 'complementary-colors';
import Color from 'color';

var color;
var myColor;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: false,
      wheel: false,
      selectedColor: '',
      colorsToAnalyze: []
    }
  }

renderUpload = () => {
  let base = this
  base.setState({
    upload: true,
    wheel: false
  })
}

renderWheel = () => {
    let base = this
    base.setState({
      upload: false,
      wheel: true
  })
}

renderWheelStoreColor = (color) => {
    let base = this
    base.setState({
      upload: false,
      wheel: true,
      selectedColor: color,
  })
}

handleComp = () => {
  let base = this;
  color = base.state.selectedColor;
  myColor = new complementaryColors(color);
  myColor = myColor.complementary();
  base.setState({
    colorsToAnalyze: myColor
  })
}

handleAnalogous = () => {
  let base = this;
  color = base.state.selectedColor;
  myColor = new complementaryColors(color);
  myColor = myColor.analogous();
  base.setState({
    colorsToAnalyze: myColor
  })
}

handleTriadic = () => {
  let base = this;
  color = base.state.selectedColor;
  myColor = new complementaryColors(color);
  myColor = myColor.splitComplementary();
  base.setState({
    colorsToAnalyze: myColor
  })
}

handleTetradic = () => {
  let base = this;
  color = base.state.selectedColor;
  myColor = new complementaryColors(color);
  myColor = myColor.tetradic();
  base.setState({
    colorsToAnalyze: myColor
  })
}

handleAdd = (color) => {
    this.setState({selectedColor: color.hex});
  }

  render(){
    if(this.props.user && this.props.user.name && this.state.upload === false && this.state.wheel === false){
      return (
        <div className="div--container__action">
          <h2 className="h2--profile__greeting">HELLO, {this.props.user.name}!</h2>
          <button className="button--profile button--nav__upload button--below" onClick={this.renderUpload}>Color Detection</button>
          <button className="button--profile button--nav__picker button--below" onClick={this.renderWheel}>Color Picker</button>
        </div>
        );
    } else if(this.props.user && this.props.user.name && this.state.upload === true && this.state.wheel === false) {
        return(
        <div>
          <button className="button--profile button--nav__picker button--above__picker" onClick={this.renderWheel}>Color Picker</button>
          <Upload renderWheelStoreColor={this.renderWheelStoreColor}/>
        </div>
      )
    } else if(this.props.user && this.props.user.name && this.state.upload === false && this.state.wheel === true) {
        return(
        <div className="div--container__action">
          <button className="button--profile button--nav__upload button--above__detect" onClick={this.renderUpload}>Color Detection</button>
          <Wheel renderWheelStoreColor={this.renderWheelStoreColor} colorsToAnalyze={this.state.colorsToAnalyze} selectedState={this.state.selectedColor} analCallback={this.handleAnalogous} tetradicCallback={this.handleTetradic} triadicCallback={this.handleTriadic} compCallback={this.handleComp} user={this.props.user} saved={JSON.stringify(this.props.user.saved)} selectedColor={this.state.selectedColor} handleAdd={this.handleAdd} />
        </div>
      )
    }
    else {
      return (
        <div className="div--container__home">
          <p><img className="img--home__logo gray" src="https://res.cloudinary.com/huecloud/image/upload/v1517519224/huelogo_yufyyq.png" /></p>
          <h2 className="h2--profile__droid">You need an account to view this page!</h2>
          <h3 className="h3--profile">Been here before?</h3>
          <Link to='/login'><button className="button--profile">login</button></Link>
          <h3 className="h3--profile">Need an account?</h3>
          <Link to='/signup'><button className="button--profile">signup</button></Link>
        </div>);
    }
  }
}

export default Profile;
