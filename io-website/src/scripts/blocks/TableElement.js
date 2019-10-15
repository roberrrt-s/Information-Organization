import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import LazyLoad from 'react-lazy-load';
import ReactTable from "react-table";
import "react-table/react-table.css";

class TableElement extends Component {

	constructor() {
		super()

		this.imgPrefix = 'https://image.tmdb.org/t/p/w185/';

		this.state = {
			columns: [{
				Header: 'Image',
				accessor: 'poster_path',
				show: true,
				sortable: false,
				width: 150,
				Cell: content => {
					return <LazyLoad key={content.value}><img src={`${this.imgPrefix}${content.value}`}/></LazyLoad>
				}
			},
			{
				Header: 'title',
				accessor: 'title',
				show: true,
			},
			{
				Header: 'Rating',
				accessor: 'vote_average',
				show: true,
				width: 75,
			},
			{
				Header: 'Genres',
				accessor: 'genre_names',
				show: true,
				Cell: content => {
					let data = []
					content.original.genre_names.map((el, i) => {
						data.push(<span key={i}><NavLink to={`/genre/${el}`}>{el}</NavLink>, </span>)
					});
					return data;
				}
			},
			{
				Header: 'Release date',
				accessor: 'release_date',
				show: true,
			}]
		}
	}

	toggleColumn(n) {
		console.log('clicked');
		const cols = this.state.columns.map((col, i) => n===i? {...col, show: !col.show}: col)
		this.setState({
			columns: cols
		})
	}

	render() {
		const buttons = this.state.columns.map((el, i) => {
			return (
				<label htmlFor={i} key={i}>
					<input id={i} type="checkbox" defaultChecked onChange={() => this.toggleColumn(i)}/>

					<span>Show {el.Header}</span>
				</label>
			)
		})

		return (
			<React.Fragment>
				{buttons}
				<ReactTable
					showPagination={true}
					data={this.props.data}
					columns={this.state.columns}
				/>
			</React.Fragment>
		)
	}
}

export default TableElement;

TableElement.propTypes = {
	data: PropTypes.array
}