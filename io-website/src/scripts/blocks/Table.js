import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
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

const data = flatten(set);

console.log(data.length);

console.log('test');

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Animal',
    selector: 'animal',
  },
  {
    name: 'Tagline',
    selector: 'tagline',
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