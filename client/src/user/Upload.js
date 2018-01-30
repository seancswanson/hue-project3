import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import Cloud from './Cloud';
import axios from 'axios';

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl: '',
            colorResponse: []
        }
    }

    uploadWidget = () => {
      let imageURL;
      let base = this
        window.cloudinary.openUploadWidget({ cloud_name: 'huecloud', upload_preset: 'p22agdmm', tags:[]},
            function(error, result) {
             base.setState({imageUrl: result[0].secure_url});
             console.log(base.state.imageUrl)
            });
    }

    detectColors = (e) => {
      let base = this
      e.preventDefault;
         axios.post('/detection',{
          imageURL: this.state.imageUrl
      }).then(response => {
          console.log(response)
          base.setState({colorResponse: response})
      }).catch(err => {
          console.log('backend error we hope', err)
      })
    }
  
	render(){
		return(
      <div className="div--container__upload">
        <Cloud callback={this.uploadWidget} url={this.state.imageUrl} />
        <button onClick={this.detectColors}>Detect Colors</button>
      </div>
		)
	}
}

export default Upload;