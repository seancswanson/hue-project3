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
			<div className="div--container__options">
				<div className="div--picker__options" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
					<button onClick={this.props.handleComp}>Complementary</button>
					<button onClick={this.props.triadicCallback}>Triadic</button>
					<button onClick={this.props.squareCallback}>Square</button>
					<button onClick={this.props.analCallback}>Analogous</button>
				</div>
				<p className="p--picker__description">Complementary colors are directly opposites</p>
				<p className="p--picker__description">Triadic colors form a triangle on a wheel.</p>
				<p className="p--picker__description">Square colors form a square on a wheel.</p>
				<p className="p--picker__description">Analogous colors are adjacent to each other.</p>
			</div>
		)
	}
}

export default ColorOptions;