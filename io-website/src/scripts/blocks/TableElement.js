import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import set from 'data/dataset.json';

const flatten = function(arr, result = []) {
	for (let i = 0, length = arr.length; i < length; i++) {
		const value = arr[i];
		if (Array.isArray(value)) {
			flatten(value, result);
		} else {
			result.push(value);
		}
	}
	return result;
};

class TableElement extends Component {

	constructor() {
		super()

		const data = flatten(set);
		const columns = [{
			Header: 'title',
			accessor: 'title'
		}]

		this.state = {
			data: data,
			columns: columns
		}
	}

	render() {
		const { data, columns } = this.state;

		return (

			<ReactTable showPagination={false} defaultPageSize={data.length} data={data} columns={columns}/>

		)
	}
}

export default TableElement;