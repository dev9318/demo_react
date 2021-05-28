import {useState} from 'react';

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
	  
    const handleClick = (e) => {
	setName('luigi');
	setAge(30);
    }

    
    return (
	<div className="home">
	    <h2>Home Page</h2>
	    <p> { name } is age { age } </p>
	    <button onClick={handleClick}> Click me </button>
	</div>
    );
}

export default Home;
