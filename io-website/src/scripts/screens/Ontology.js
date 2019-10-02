import React, { Component } from 'react';

import { ReactComponent as Image } from './../../assets/images/ontology.svg';

class Ontology extends Component {
	render() {
		return (
			<main id="ontology">
				<div className="c-vector">
					<Image />
				</div>
			</main>
		)
	}
}

export default Ontology;