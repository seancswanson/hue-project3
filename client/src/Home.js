import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';

class Home extends Component {
  render(){
    return (
    	<div>
        <div className="div--container__home">
          <p><img className="img--home__logo" src="http://res.cloudinary.com/huecloud/image/upload/v1517519224/huelogo_yufyyq.png" /></p>
          <h2 className="h2--profile">Hue</h2>
          <h2 className="h2--profile__droid">a color detection utility for designers, by designers</h2>
          <h3 className="h3--profile">Been here before?</h3>
          <Link to='/login'><button className="button--profile">login</button></Link>
          <h3 className="h3--profile">Need an account?</h3>
          <Link to='/signup'><button className="button--profile">signup</button></Link>
        </div>
      </div>
      );
  }
}

export default Home;
