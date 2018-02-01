import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
        <div className="footer">
            <span className="footer-text"><a href="#">Jade Rosse</a>, <a href="#">Desiree Rainey</a>, <a href="#">Sean Swanson</a> &copy; {new Date().getFullYear()}</span>
        </div>
      );
  }
}

export default Footer;
