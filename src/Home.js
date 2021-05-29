import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    
    const handleDelete = (id) => {
	const newBlogs = blogs.filter(blog => blog.id !== id);
	setBlogs(newBlogs);
    }
    
    useEffect( () => {
	fetch('http://localhost:8000/blogs').then(res => {
	    return res.json();
	}).then(data =>{
	    console.log(data);
	    setBlogs(data);
	});
    }, []);
    // ,[] only runs it once when it is rendered, [name] runs it when name changes
    
    return (
	<div className="home">
	    {blogs && <BlogList blogs={blogs} title = "all blogs" handleDelete={handleDelete}/>}
	</div>
    );
}

export default Home;
