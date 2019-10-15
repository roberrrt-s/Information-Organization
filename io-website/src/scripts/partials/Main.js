import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import Home from "scripts/screens/Home"
import Data from "scripts/screens/Data"

class Main extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="l-main">
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route exact path="/data" render={(props) => <Data {...props} data={this.props.data} />} />
					<Route exact path="/genre/:genre" render={(props) => <Home {...props} />} />
				</Switch>
			</div>
		)
	}
}

export default Main;

Main.propTypes = {
	data: PropTypes.array
}