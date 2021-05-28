import Navbar from './Navbar';
import Home from './Home';
import './index.css';

function App() {
    const title = 'Welcome to blog';
    const link = 'http://www.google.com';
  return (
	  <div className="App">
	  <Navbar />
	       <div className="content">
	  
	          <Home />

                  <p>{[1,2,3,4]}</p>
	          <p>{Math.random()*10}</p>

	          <a href={link}>Google!</a>
                </div>
           </div>
  );
}// we cannot output objects like dictonaries using {}

export default App;
