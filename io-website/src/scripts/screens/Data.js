import React, { Component } from 'react';
import TableElement from "scripts/blocks/TableElement"

class Data extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main id="data">
				<TableElement />
			</main>
		)
	}
}

export default Data;