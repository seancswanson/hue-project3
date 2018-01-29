import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import Cloud from './Cloud';

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl: ''
        }
    }

    uploadWidget = () => {
      let base = this
        window.cloudinary.openUploadWidget({ cloud_name: 'huecloud', upload_preset: 'p22agdmm', tags:[]},
            function(error, result) {
             base.setState({imageUrl: result[0].secure_url});
             console.log(base.state.imageUrl)
            });
    }

	render(){
		return(
      <Cloud callback={this.uploadWidget} url={this.state.imageUrl}/>
		)
	}
}

export default Upload;