import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div class='nav'>
			<Link to='/'>
				<h1>Timbercross Template</h1>
			</Link>
			<nav>
				<ul>
					<Link to='/product'>
						<li>Product</li>
					</Link>
					<Link to='/about'>
						<li>About</li>
					</Link>
					<Link to='/contact'>
						<li>Contact</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
