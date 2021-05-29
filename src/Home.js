import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(
	[
	    {title: 'New', body: 'lopem', author: 'mario', id:1},
	    {title: 'New', body: 'lopem', author: 'luigi', id:2},
	    {title: 'New', body: 'lopem', author: 'peach', id:3},
	]);

    const [name, setName] = useState('Peach');
    
    const handleDelete = (id) => {
	const newBlogs = blogs.filter(blog => blog.id !== id);
	setBlogs(newBlogs);
    }
    
    useEffect( () => {
	console.log('use effect ran');
    }, [name]);
    // ,[] only runs it once when it is rendered, [name] runs it when name changes
    
    return (
	<div className="home">
	    <BlogList blogs={blogs} title = "all blogs" handleDelete={handleDelete}/>

	// <BlogList blogs={blogs.filter ((blog) => blog.author === 'peach')} title= 'Peach blog' handleDelete={handleDelete}/> // to filter data
	    <p>{name}</p>
	    <button onClick={() => setName('luigi')}> change name </button>
	</div>
    );
}

export default Home;
