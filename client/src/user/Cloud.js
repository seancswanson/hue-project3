import React, { Component } from 'react';
import { render } from 'react-dom';

class Cloud extends Component {

    uploadWidget() {
        window.cloudinary.openUploadWidget({ cloud_name: 'huecloud', upload_preset: 'p22agdmm', tags:[]},
            function(error, result) {
                console.log(result);
            });
    }
    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}

export default Cloud;