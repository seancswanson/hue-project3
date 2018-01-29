import React, { Component } from 'react';
import { render } from 'react-dom';



class Cloud extends Component {
    render(){
        return (
            <div className="main">
                <h1>Upload your image!</h1>
                <div className="div--cloud__upload">
                    <button onClick={this.props.callback} className="upload-button">
                        Add Image
                    </button>
                </div>
                <img src={this.props.url} />
            </div>
        );
    }
}

export default Cloud;