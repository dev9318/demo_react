import logo from './logo.svg';
import './App.css';

function App() {
    const title = 'Welcome to blog';
    const link = 'http://www.google.com';
  return (
    <div className="App">
	  <div className="content">
	  <h1>{title}</h1>

          <p>{[1,2,3,4]}</p>
	  <p>{Math.random()*10}</p>

	  <a href={link}>Google!</a>
      </div>
    </div>
  );
}// we cannot output objects like dictonaries

export default App;
