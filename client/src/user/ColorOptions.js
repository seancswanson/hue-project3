import React, {Component} from 'react';
import complementaryColors from 'complementary-colors';

class ColorOptions extends Component {
	render(){
		return(
			<div>
				<button onClick={this.props.handleComp}>Complementary</button>
				<button onClick={this.props.triadicCallback}>Triadic</button>
				<button onClick={this.props.tetradicCallback}>Tetradic</button>
				<button onClick={this.props.analCallback}>Analogous</button>
			</div>
		)
	}
}

export default ColorOptions;