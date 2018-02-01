import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Upload from './user/Upload';
import Palette from './user/Palette';
import Wheel from './user/Wheel';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: false,
      wheel: false,
      selectedColor: ''
    }
  }

renderUpload = () => {
  console.log("Clicked")
  let base = this
  base.setState({
    upload: true,
    wheel: false,
  })
}

renderWheel = () => {
  console.log("Clicked")
    let base = this
  base.setState({
    upload: false,
    wheel: true,
  })
}

renderWheelStoreColor = (color) => {
    console.log("Clicked")
    let base = this
    base.setState({
    upload: false,
    wheel: true,
    selectedColor: color
  })
}

handleAdd = (color) => {
    this.setState({selectedColor: color.hex});
  }

  render(){
    if(this.props.user && this.props.user.name && this.state.upload === false && this.state.wheel === false){
      return (
        <div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
          <h1>WEEEEE</h1>
          <button className="button--profile" onClick={this.renderUpload}>Upload and Detect</button>
          <button className="button--profile" onClick={this.renderWheel}>Explore the Color</button>
        </div>);
    } else if(this.props.user && this.props.user.name && this.state.upload === true && this.state.wheel === false) {
        return(
        <div>
          <button className="button--profile" onClick={this.renderWheel}>Explore the Color</button>
          <h1>Upload then Detect Colors</h1>
          <Upload renderWheelStoreColor={this.renderWheelStoreColor}/>
        </div>
      )
    } else if(this.props.user && this.props.user.name && this.state.upload === false && this.state.wheel === true) {
        return(
        <div>
         <button className="button--profile" onClick={this.renderUpload}>Upload and Detect</button>
          <h1>Color Explorer</h1>
          <Wheel user={this.props.user} saved={JSON.stringify(this.props.user.saved)} selectedColor={this.state.selectedColor} handleAdd={this.handleAdd}/>
        </div>
      )
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
