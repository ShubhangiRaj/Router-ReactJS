import React, { Component } from 'react';

class StartBtn extends Component {

	eventHandler(){
		alert('Event handler function called using a prop');
	}

	render(){

		if (this.props.name == "Testing"){
			return (
		      	<div>
			      	<h2>
			      	  Decision making Props
			      	</h2>
					<h2>{this.props.name}</h2>
					<button onClick={this.eventHandler}>START</button>
				</div>
		    );
		}
		else{
			return(
					<h1>All working will till now</h1>
				);
		}
	}
}

export default StartBtn;
