import React, { Component } from 'react';
import TableElement from "scripts/blocks/TableElement"
import PropTypes from 'prop-types';

class Data extends Component {

	constructor() {
		super();
	}

	render() {

		return (
			<main id="data">
				<TableElement data={this.props.data}/>
			</main>
		)
	}
}

export default Data;

Data.propTypes = {
	data: PropTypes.array
}