import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import renderIf from 'render-if';
import Cloud from './Cloud';
import ColorSquare from './ColorSquare';
import axios from 'axios';

// var imageColors;

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
		return(
      <div className="div--container__upload">
        <Cloud callback={this.uploadWidget} url={this.state.imageUrl} />
        <button onClick={this.detectColors}>Detect Colors</button>
          {renderIf(this.state.colorResponse.length > 0)(
            <ColorSquare color={this.state.imageColors} />
            )}
        </div>
		)
	}
}




export default Upload;