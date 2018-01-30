import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import renderIf from 'render-if';
import Cloud from './Cloud';
import ColorSquare from './ColorSquare';
import axios from 'axios';

var colorSquare;
var upload;
var detect;

// function ColorSquare(props) {
//     return(
//         color.map(thing => ({
//             return(
//                 <div className="div--image-color" style={{backgroundColor: thing.html_color}}>
//                 </div>
//             )
//         }))
//     )
// }

const DetectedSquare = (props) => {
    return(    
        <div>
          <div className="div--image-color" style={{backgroundColor: props.background}}></div>
        </div> 
        )
      }

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl: '',
            colorResponse: [],
            imageColors: []
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
      }).then(dataObj => {
          console.log(dataObj)
          this.setState({colorResponse: dataObj.data.results[0]})
          this.setState({imageColors: dataObj.data.results[0].info.image_colors})
          console.log(base.state.colorResponse);
          console.log('THIS IS IMAGE COLORS');
          console.log(base.state.imageColors);
      }).catch(err => {
          console.log('backend error we hope', err)
      })
    }
  
	render(){
    if (this.state.imageColors.length > 0){
      colorSquare = <ColorSquare color={this.state.imageColors} />
    } else {
      upload = <Cloud callback={this.uploadWidget} url={this.state.imageUrl} />
      detect = <button onClick={this.detectColors}>Detect Colors</button>
    }
		return(
      <div className="div--container__upload">
        {upload}
        {detect}
        {this.state.imageColors.map( color => (
          <DetectedSquare background={color.html_code} />
          )
        )}
        {colorSquare}
        </div>
		)
	}
}




export default Upload;