import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "scripts/screens/Home"
import Ontology from "scripts/screens/Ontology"
import Data from "scripts/screens/Data"
import About from "scripts/screens/About"

class Main extends Component {
	render() {
		return (
			<div className="l-main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/ontology" component={Ontology} />
					<Route exact path="/data" component={Data} />
					<Route exact path="/about" component={About} />
				</Switch>
			</div>
		)
	}
}

export default Main;