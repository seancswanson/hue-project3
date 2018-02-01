import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import renderIf from 'render-if';
import Cloud from './Cloud';
import tinycolor from 'tinycolor2';
import axios from 'axios';
import Wheel from './Wheel';


<<<<<<< HEAD
<<<<<<< HEAD

=======
var colorSquare;
>>>>>>> 007f385bd6ed20f14f701b9e9cd48ab1e4324103
=======
>>>>>>> e296b5f2ff885f55b430bdf4ca56359204231912
var upload;
var detect;

const DetectedSquare = (props) => {
    return(    
        <div>
          <h1>{props.background.percent} % {props.background.closest_palette_color}</h1>
          <div onClick={props.callback} className="div--image-color" style={{backgroundColor: props.background.html_code}}></div>
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
        window.cloudinary.openUploadWidget({ cloud_name: 'huecloud', upload_preset: 'p22agdmm', tags:[], stylesheet: './CloudinaryWidget.css'},
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
    } else {
      upload = <Cloud callback={this.uploadWidget} url={this.state.imageUrl} />
      detect = <button onClick={this.detectColors}>Detect Colors</button>
    }
		return(
      <div className="div--container__upload">
        {upload}
        {detect}
        {this.state.imageColors.map( color => (
          <DetectedSquare background={color} callback={this.props.callback}/>
          )
        )}
        </div>
		)
	}
}




export default Upload;