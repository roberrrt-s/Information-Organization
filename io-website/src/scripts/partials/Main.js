import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import Home from "scripts/screens/Home"
import Ontology from "scripts/screens/Ontology"
import Data from "scripts/screens/Data"
import About from "scripts/screens/About"

class Main extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="l-main">
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route exact path="/ontology" render={(props) => <Ontology {...props} />} />
					<Route exact path="/data" render={(props) => <Data {...props} data={this.props.data} />} />
					<Route exact path="/about" render={(props) => <About {...props} />} />
				</Switch>
			</div>
		)
	}
}

export default Main;

Main.propTypes = {
	data: PropTypes.array
}