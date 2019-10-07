import React, { Component } from 'react';
import Table from "scripts/blocks/Table"

class Data extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main id="data">
				<Table />
			</main>
		)
	}
}

export default Data;