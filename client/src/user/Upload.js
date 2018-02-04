import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import renderIf from 'render-if';
import Cloud from './Cloud';
import tinycolor from 'tinycolor2';
import Profile from '../Profile';
import axios from 'axios';
import Wheel from './Wheel';   
import DetectedSquare from './DetectedSquare'

var upload;
var detect;

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl: '',
            colorResponse: [],
            imageColors: [],
            detect: false
        }
    }

    uploadWidget = () => {
      let imageURL;
      let base = this
        window.cloudinary.openUploadWidget({ cloud_name: 'huecloud', upload_preset: 'p22agdmm', tags:[], sources: ['local', 'url', 'facebook'],  stylesheet: 'https://drive.google.com/uc?export=download&id=14TLPYGXznm_-YDsDdahWL9UZzWj5LwFc'},
            function(error, result) {
             base.setState({imageUrl: result[0].secure_url, detect: true});
             if(base.state.detect == true){
                
                    
                     axios.post('/detection',{
                      imageURL: base.state.imageUrl
                  }).then(dataObj => {
                      console.log(dataObj)
                      base.setState({colorResponse: dataObj.data.results[0]})
                      base.setState({imageColors: dataObj.data.results[0].info.image_colors})
                      console.log(base.state.colorResponse);
                      console.log('THIS IS IMAGE COLORS');
                      console.log(base.state.imageColors);
                  }).catch(err => {
                      console.log('backend error we hope', err)
                  })
                console.log('we succeeded');
             }else{
                console.log('we failed');
             }
            });

    }

	render(){
    if (this.state.imageColors.length > 0){
    } else {
      upload = <Cloud callback={this.uploadWidget} url={this.state.imageUrl} />
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