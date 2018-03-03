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
						<span style={tooltipStyle}>Colors Directly Opposite</span>
						<button onClick={this.props.triadicCallback}>Triadic</button>
						<span style={tooltipStyle}>Three Equally Spaced Colors</span>
						<button onClick={this.props.tetradicCallback}>Tetradic</button>
						<span style={tooltipStyle}>Colors Forming a Rectangle</span>
						<button onClick={this.props.analCallback}>Analogous</button>
						<span style={tooltipStyle}>Group of Three Colors</span>
				</div>
			</div>
		)
	}
}

export default ColorOptions;