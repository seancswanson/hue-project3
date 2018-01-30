import React, {Component} from 'react';

class ColorSquare extends Component {
	render(){
		return(    
         <div>
            {this.props.color.forEach((color) => {
            <div className="div--image-color" style={{backgroundColor: color.closest_palette_color_html_code}}></div>
            })}
   		</div> 
    		)
    	}
	}

export default ColorSquare;