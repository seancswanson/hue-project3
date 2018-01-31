import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Upload from './user/Upload';
import Palette from './user/Palette';
import Wheel from './user/Wheel';


class Profile extends Component {
  

  render(){
    if(this.props.user && this.props.user.name){
      return (
        <div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
          <h1>WEEEEE</h1>
          <Upload />
          <Palette saved={JSON.stringify(this.props.user.saved)}/>
          <Wheel user={this.props.user}/>
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
