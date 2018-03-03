import React, { Component } from 'react';

class Cloud extends Component {
    render(){
    const uploadStyle = {
      display: this.props.detect ? 'initial' : 'none'
    }
        return (
            <div className="main">
                <div className="div--cloud__upload">
                    <button onClick={this.props.callback} className="upload-button">
                        Upload + Detect
                    </button>
                </div>
                <img alt="uploaded image" className="div--cloud__image" src={this.props.url} style={uploadStyle}/>
            </div>
        );
    }
}

export default Cloud;