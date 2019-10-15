import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import Data from "scripts/screens/Data"

class Main extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="l-main">
				<Switch>
					<Route exact path="/" render={(props) => <Data {...props} data={this.props.data} />} />
					<Route exact path="/genre/:genre" render={(props) => <Data {...props} />} />
				</Switch>
			</div>
		)
	}
}

export default Main;

Main.propTypes = {
	data: PropTypes.array
}