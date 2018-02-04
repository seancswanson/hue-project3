import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
        <div className="footer">
            <span className="footer-text"><a href="https://www.jaderosse.com">Jade Rosse</a>, <a href="#">Desiree Rainey</a>, <a href="https://www.seancswanson.com">Sean Swanson</a> &copy; {new Date().getFullYear()}</span>
        </div>
      );
  }
}

export default Footer;
