import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(
	[
	    {title: 'New', body: 'lopem', author: 'mario', id:1},
	    {title: 'New', body: 'lopem', author: 'luigi', id:2},
	    {title: 'New', body: 'lopem', author: 'peach', id:3},
	]);


    
    return (
	<div className="home">
	    <BlogList blogs={blogs} title = "all blogs"/>
	    <BlogList blogs={blogs.filter ((blog) => blog.author === 'peach')} title= 'Peach blog'/>
	</div>
    );
}

export default Home;
