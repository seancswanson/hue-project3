import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import Cloud from './Cloud';
import axios from 'axios';
import Wheel from './Wheel';   
import DetectedSquare from './DetectedSquare'

var upload;

class Upload extends Component {
    constructor(props){
        super(props);ß
        this.state = {
            imageUrl: '',
            colorResponse: [],
            imageColors: [],
            detect: false
        }
    }

    uploadWidget = () => {
      let base = this
        window.cloudinary.openUploadWidget({ cloud_name: 'huecloud', upload_preset: 'p22agdmm', tags:[], sources: ['local', 'url', 'facebook'], theme: "minimal"},
            function(error, result) {
             base.setState({imageUrl: result[0].secure_url, detect: true});
             if(base.state.detect === true){
                     axios.post('/detection',{
                      imageURL: base.state.imageUrl
                  }).then(dataObj => {
                      base.setState({colorResponse: dataObj.data.results[0]})
                      base.setState({imageColors: dataObj.data.results[0].info.image_colors})
                  }).catch(err => {
                      console.log('Backend Error', err)
                  })
             }else{
                console.log('Upload Widget Failed to Load');
             }
          });
    }

	render(){
    if (this.state.imageColors.length > 0){
    } else {
      upload = <Cloud callback={this.uploadWidget} url={this.state.imageUrl} detected={this.state.detect} />
    }
		return(
      <div className="div--container__upload">
        {upload}
        <div className="div--container__alldetected">
            {this.state.imageColors.map( color => (
              <div className="div--container__square"><DetectedSquare background={color} renderWheelStoreColor={this.props.renderWheelStoreColor}/></div>
            )
            )}   
        </div>
      </div>
		)
	}
}




export default Upload;