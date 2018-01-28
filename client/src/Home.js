import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Home extends Component {
  render(){
    return (
    	<div>
        	<p>This is a home page. You probably ought to write something here</p>
        	<ButtonToolbar>
            	<Button bsStyle="primary">test button</Button>
            </ButtonToolbar>
        </div>
      );
  }
}

export default Home;
