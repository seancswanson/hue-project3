import React, {Component} from 'react';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'huecloud'});

class Upload extends Component {

    var generateSignature = function(callback, params_to_sign){
      $.ajax({
        url     : “http://www.my-domain.com/my_generate_signature %>",
        type    : "GET",
        dataType: "text",
        data    : { data: params_to_sign},
        complete: function() {console.log("complete")},
        success : function(signature, textStatus, xhr) { callback(signature); },
        error   : function(xhr, status, error) { console.log(xhr, status, error); }
        });
      }
   
     
    $('#upload_widget_opener').cloudinary_upload_widget(
      { cloud_name: cloud_name, api_key: api_key,
        cropping: 'server', upload_signature: generateSignature},
        function(error, result) { console.log(error, result) });
  
	render(){
		return(
			<CloudinaryContext cloudName='huecloud'>
			<h1>Upload!</h1>
				<div>
					<Image publicId='sample' width='50' />
				</div>
					<Image publicId='sample' width='0.5' />		
			</CloudinaryContext>
		)
	}
}

export default Upload;