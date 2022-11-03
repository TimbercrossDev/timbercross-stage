import './styles/App.css';
import Home from './routes/home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './routes/product';
import Contact from './routes/contact';
import About from './routes/about';
import Nav from './components/nav';

function App() {
	return (
		<div className='App'>
			<Nav></Nav>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/product' element={<Product />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/about' element={<About />}></Route>
			</Routes>
		</div>
	);
}

export default App;
