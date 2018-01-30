import React, {Component} from 'react';

class ColorSquare extends Component {
	render(){
		return(    
         <div>
        	{this.props.color.map(({color,index}) => (
            <div className="div--image-color" style={{backgroundColor: color.html_color}}> </div>
            ))}
   			 </div> 
    		)
    	}
	}

export default ColorSquare;