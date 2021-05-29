import {useState} from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState(
	[
	    {title: 'New', body: 'lopem', author: 'mario', id:1},
	    {title: 'New', body: 'lopem', author: 'luigi', id:2},
	    {title: 'New', body: 'lopem', author: 'peach', id:3},
	]);


    
    return (
	<div className="home">
	    <h2>Home Page</h2>
	    {blogs.map((blog) => (
		    <div className='blog-preview' key = {blog.id}>
		    <h2> {blog.title}</h2>
		    <p> Writtten by {blog.author} </p>
		    </div>
	    ))}
	</div>
    );
}

export default Home;
