import React, { Component } from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

class Speed extends Component {

	// PROPS
	slow(){
		alert('I am going to be as slow as a snail..')
	}

	medium(){
		alert('I will be of okish speed');
	}

	fast(){
		alert('I am flash');
	}

	// STATES
	constructor(props, context) {
    	super(props, context);

    	this.state = {
      		color: 'green'
    	};
  	};

  	changeColor(){
  		const newColor=this.state.color === green?yellow:green;
  		this.setState({color: newColor });
  	}

	render(){
		return (
				<div style={{background: this.state.color}}>
					<h2>Speed</h2>
					<button onClick={this.changeColor}>Change State</button>
					<span>
						<button onClick={this.slow}>Slow</button>
						<button onClick={this.medium}>Medium</button>
						<button onClick={this.fast}>Fast</button>
					</span>
				</div>
			);
	}
}

export default Speed;
