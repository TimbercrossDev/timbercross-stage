import React from 'react';
import '../styles/home.css';
import Nav from '../components/nav';
import hero from '../assets/600x600.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {

	const [blogs, setBlogs] = useState(null);

	const fetchBlogs = async () => {
		try {
			const res = await axios.get(`http://52.14.224.159/wp-json/wp/v2/posts`, {
			});
			setBlogs(res.data)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		// Trigger the API Call
		fetchBlogs();
	}, []);

	if (!blogs) return "no blog!"

	if(blogs)(
		console.log(blogs)
	)

	return (
		<div>
			<img src={hero}></img>
			<h1>{blogs[0].title.rendered}</h1>
			<div dangerouslySetInnerHTML={{ __html: blogs[0].content.rendered }} />
		</div>
	);
};

export default Home;
