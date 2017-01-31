import React, { Component } from 'react';

class Rounds extends Component {
	render(){
		return (
				<div>
					<h2>Rounds</h2>
					<input  type="range" name="points" min="0" max="20" />
				</div>
			);
	}
}

export default Rounds;
