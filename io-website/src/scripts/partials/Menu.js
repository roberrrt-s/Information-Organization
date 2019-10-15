import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Menu extends Component {
	render() {
		return (
			<ul className="b-menu">
				<li className="b-menu__item">
					<NavLink exact to="/">Home</NavLink>
				</li>
				<li className="b-menu__item">
					<NavLink exact to="/data">Data</NavLink>
				</li>
			</ul>
		)
	}
}

export default Menu;