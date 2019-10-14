// Core
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import Main from 'scripts/partials/Main';
import Menu from 'scripts/partials/Menu';
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

class App extends Component {
	constructor() {
		super();
	}

	render() {
		const data = flatten(set);

		return (
			<div className="l-app">
				<HashRouter>
					<div className="l-header">
						<Menu />
					</div>
					<Main data={data}/>
				</HashRouter>
			</div>
		);
	}
}

export default App;

App.propTypes = {
	data: PropTypes.array
}