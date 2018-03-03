import React, {Component} from 'react';

class ColorOptions extends Component {
	constructor() {
		super() 
			this.state = { hover: false }
			this.handleMouseOut = this.handleMouseOut.bind(this)
			this.handleMouseIn = this.handleMouseIn.bind(this);
		}

		handleMouseIn() {
			this.setState({ hover: true })
		}

		handleMouseOut() {
			this.setState({ hover: false })
		}
	
	render(){
		const tooltipStyle = {
			display: this.state.hover ? 'initial' : 'none'
		}

		return(
			<div>
				<div onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
						<button onClick={this.props.handleComp}>Complementary</button>
						<button onClick={this.props.triadicCallback}>Triadic</button>
						<button onClick={this.props.tetradicCallback}>Tetradic</button>
						<button onClick={this.props.analCallback}>Analogous</button>
						<p>Complementary colors are directly opposites</p>
						<p>Triadic colors form a triangle.</p>
						<p>Tetradic colors form a rectangle.</p>
						<p>Analogous colors are adjacent to each other.</p>
				</div>
			</div>
		)
	}
}

export default ColorOptions;