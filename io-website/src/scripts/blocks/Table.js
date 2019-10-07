import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import dogs from 'data/data-1.json';


// adult: false
// backdrop_path: "/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg"
// genre_ids: (2) [28, 53]
// genre_names: (2) ["Action", "Thriller"]
// id: 245891
// original_language: "en"
// original_title: "John Wick"
// overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him."
// popularity: 60.104
// poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg"
// release_date: "2014-10-24"
// title: "John Wick"
// video: false
// vote_average: 7.2
// vote_count: 10851


const data = [].concat(...dogs);

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Description',
    selector: 'overview',
    maxWidth: '300px',
    wrap: true,
  },
  {
    name: 'Score',
    selector: 'vote_average',
    sortable: true,
    right: true,
  },
  {
    name: 'Popularity',
    selector: 'popularity',
    sortable: true,
    right: true,
  },
];

class Table extends Component {
	render() {
		return (
			<DataTable
				title="Dog movies"
				columns={columns}
				data={data}
			/>
		)
	}
}

export default Table;