import React from 'react';

import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav className='app-footer'>
			<ul>
				<NavLink to='/'>
					<li>
						<i class='fa fa-home'></i>
						Home
					</li>
				</NavLink>
				<NavLink to='/signin'>
					<li>
						<i class='fa fa-biking'></i>
						Bike
					</li>
				</NavLink>
				<NavLink to='/chooseworkout'>
					<li>
						<i class='fa fa-user'></i>
						Account
					</li>
				</NavLink>
				<NavLink to='/workout'>
					<li>
						<i class='fa fa-map-marker'></i>
						Find Store
					</li>
				</NavLink>
			</ul>
		</nav>
	);
}
export default Nav;
