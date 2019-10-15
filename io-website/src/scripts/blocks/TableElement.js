import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LazyLoad from 'react-lazy-load';
import ReactTable from "react-table";
import "react-table/react-table.css";

class TableElement extends Component {
	constructor() {
		super()

		this.imgPrefix = 'https://image.tmdb.org/t/p/w185/';
		this.imdbPrefix = 'https://www.imdb.com/title/';

		this.state = {
			columns: [{
				Header: 'Image',
				accessor: 'poster_path',
				show: true,
				sortable: false,
				width: 150,
				filterable: false,
				Cell: content => {
					return <LazyLoad key={content.value}><img src={`${this.imgPrefix}${content.value}`}/></LazyLoad>
				}
			},
			{
				Header: 'Title',
				accessor: 'title',
				show: true,
				Cell: content => {
					return (
						<a href={`${this.imdbPrefix}${content.original.imdb_id}`}>{content.row.title}</a>
					)
				},
				filterMethod: (filter, row) => {
					return row.title && row.title.toLowerCase().indexOf(filter.value.toLowerCase()) >=0;
				}
			},
			{
				Header: 'Rating',
				accessor: 'vote_average',
				show: true,
				width: 75,
				filterable: false,
			},
			{
				Header: 'Genres',
				accessor: 'genre_names',
				show: true,
				Cell: content => {
					let data = []
					content.original.genre_names && content.original.genre_names.map((el, i) => {
						data.push(<span key={i}>{el}</span>)
					});
					return data;
				},
				filterMethod: (filter, row) => {
					return row.genre_names && row.genre_names.toString().toLowerCase().indexOf(filter.value.toLowerCase()) >=0;
				}
			},
			{
				Header: 'Release date',
				accessor: 'release_date',
				show: true,
			},
			{
				Header: 'Main animal',
				accessor: 'animal',
				show: true,
				Cell: content => {
					let data = []
					content.original.animal && content.original.animal.map((el, i) => {
						data.push(<span key={i}>{el}</span>)
					});
					return data;
				},
				filterMethod: (filter, row) => {
					if (filter.value === "all") {
						return true;
					}
					if (filter.value.indexOf("dog") !== -1) {
						return row[filter.id] && row[filter.id].indexOf("dog") !== -1;
					}
					if (filter.value.indexOf("cat") !== -1) {
						return row[filter.id] && row[filter.id].indexOf("cat") !== -1;
					}
				},
				Filter: ({ filter, onChange }) =>
					<select
						onChange={event => onChange(event.target.value)}
						style={{ width: "100%" }}
						value={filter ? filter.value : "all"}
					>
						<option value="all">Show All</option>
						<option value="dog">Dogs</option>
						<option value="cat">Cats</option>
					</select>
			}]
		}
	}

	addFilterPlaceholder() {
		const filters = document.querySelectorAll("div.rt-th > input");
		for (let filter of filters) {
			console.log(filter);
			filter.placeholder = "Filter..";
		}
	}

	componentDidMount() {
		this.addFilterPlaceholder();
	}

	toggleColumn(n) {
		const cols = this.state.columns.map((col, i) => n===i? {...col, show: !col.show}: col)
		this.setState({
			columns: cols
		})
	}

	render() {
		const buttons = this.state.columns.map((el, i) => {
			return (
				<label htmlFor={`id-${i}`} key={i}>
					<input id={`id-${i}`} type="checkbox" defaultChecked onChange={() => this.toggleColumn(i)}/>

					<span>Show {el.Header}</span>
				</label>
			)
		})

		const subComponent = row => {
			return (
				<div className="subrow">
					{row.original.overview}
				</div>
			);
		};

		return (
			<React.Fragment>
				<div className="b-buttons">
					{buttons}
				</div>
				<ReactTable
					showPagination={true}
					data={this.props.data}
					filterable={true}
					columns={this.state.columns}
					SubComponent={subComponent}
					defaultSorted={[{
						id: "release_date",
						desc: true
					}]}
				/>
			</React.Fragment>
		)
	}
}

export default TableElement;

TableElement.propTypes = {
	data: PropTypes.array
}