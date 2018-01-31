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
      palette: false
    }
  }

renderUpload = () => {
  console.log("Clicked")
  let base = this
  base.setState({
    upload: true,
    wheel: false,
    palette: false
  })
}

renderWheel = () => {
  console.log("Clicked")
    let base = this
  base.setState({
    upload: false,
    wheel: true,
    palette: false
  })
}

renderPalette = () => {
  console.log("Clicked")
    let base = this
  base.setState({
    upload: false,
    wheel: false,
    palette: true
  })
}
  render(){
    if(this.props.user && this.props.user.name && this.state.upload === false && this.state.wheel === false && this.state.palette === false){
      return (
        <div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
          <h1>WEEEEE</h1>
          <button onClick={this.renderUpload}>Upload and Detect</button>
          <button onClick={this.renderWheel}>Explore the Color</button>
          <button onClick={this.renderPalette}>View saved color palette</button>
        </div>);
    } else if(this.props.user && this.props.user.name && this.state.upload === true && this.state.wheel === false && this.state.palette === false) {
        return(
        <div>
          <button onClick={this.renderWheel}>Explore the Color</button>
          <button onClick={this.renderPalette}>View saved color palette</button>
          <h1>Upload then Detect Colors</h1>
          <Upload />
        </div>
      )
    } else if(this.props.user && this.props.user.name && this.state.upload === false && this.state.wheel === true && this.state.palette === false) {
        return(
        <div>
         <button onClick={this.renderUpload}>Upload and Detect</button>
          <button onClick={this.renderPalette}>View saved color palette</button>
          <h1>Color Explorer</h1>
          <Wheel user={this.props.user}/>
        </div>
      )
    }  else if(this.props.user && this.props.user.name && this.state.upload === false && this.state.wheel === false && this.state.palette === true) {
        return(
        <div>
          <button onClick={this.renderUpload}>Upload and Detect</button>
          <button onClick={this.renderWheel}>Explore the Color</button>
          <h1>Favorite Colors</h1>
          <Palette saved={JSON.stringify(this.props.user.saved)}/>
        </div>
      )
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
