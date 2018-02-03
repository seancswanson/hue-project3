import React, { Component } from 'react';
import { render } from 'react-dom';

class Cloud extends Component {
    render(){
        return (
            <div className="main">
                <div className="div--cloud__upload">
                    <button onClick={this.props.callback} className="upload-button">
                        Upload + Detect
                    </button>
                </div>
                <img className="div--cloud__image" src={this.props.url} />
            </div>
        );
    }
}

export default Cloud;