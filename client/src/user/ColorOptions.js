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
			display: this.state.hover ? 'block' : 'none'
		}

		return(
			<div>
				<div onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
						<button onClick={this.props.handleComp}>Complementary</button>
					<div>
						<div style={tooltipStyle}>Colors Directly Opposite</div>
					</div>
						<button onClick={this.props.triadicCallback}>Triadic</button>
					<div>
						<div style={tooltipStyle}>Three Equally Spaced Colors</div>
					</div>
						<button onClick={this.props.tetradicCallback}>Tetradic</button>
					<div>
						<div style={tooltipStyle}>Colors Forming a Rectangle</div>
					</div>
						<button onClick={this.props.analCallback}>Analogous</button>
					<div>
						<div style={tooltipStyle}>Group of Three Colors</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ColorOptions;