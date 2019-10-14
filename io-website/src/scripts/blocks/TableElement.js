import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactTable from "react-table";
import "react-table/react-table.css";

class TableElement extends Component {

	constructor() {
		super()

		this.state = {
			columns: [{
				Header: 'title',
				accessor: 'title'
			},
			{
				Header: 'Gemiddelde cijfer',
				accessor: 'vote_average'
			},
			{
				Header: 'Genres',
				accessor: 'genre_names'
			}]
		}
	}

	toggleShow() {
		this.setState({
			columns: [{
				Header: 'title',
				accessor: 'title'
			},
			{
				Header: 'Gemiddelde cijfer',
				accessor: 'vote_average',
				show: false
			},
			{
				Header: 'Genres',
				accessor: 'genre_names'
			}]
		})
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={this.toggleShow.bind(this)}>test</button>
				<ReactTable showPagination={false} defaultPageSize={this.props.data.length} data={this.props.data} columns={this.state.columns}/>
			</React.Fragment>
		)
	}
}

export default TableElement;

TableElement.propTypes = {
	data: PropTypes.array
}