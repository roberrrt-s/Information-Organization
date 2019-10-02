import React, { Component } from 'react';
import dogs from 'data/data-1.json';

const RenderRow = (props) => {
	return props.keys.map(key => {
		return <td key={props.data[key]}>{props.data[key]}</td>
	})
}

class Data extends Component {

	constructor(props) {
		super(props);
		this.getHeader = this.getHeader.bind(this);
		this.getRowsData = this.getRowsData.bind(this);
		this.getKeys = this.getKeys.bind(this);
	}

	getKeys() {
		return Object.keys(dogs[0][0]);
	}

	getHeader() {
		const keys = this.getKeys();
		return keys.map(key => {
			return <th key={key}>{key.toUpperCase()}</th>
		})
	}

	getRowsData() {
		const items = dogs[0];
		const keys = this.getKeys();
		return items.map((row, index) => {
			return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
		})
	}

	render() {
		return (
			<main id="data">
				<table>
					<thead>
						<tr>{this.getHeader()}</tr>
					</thead>
					<tbody>
						{this.getRowsData()}
					</tbody>
				</table>
			</main>
		)
	}
}

export default Data;