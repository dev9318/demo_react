import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    const title = 'Welcome to blog';
    const link = 'http://www.google.com';
    return (
	    <Router>
	    <div className="App">
	  <Navbar />
	       <div className="content">
	    <Switch>
	    <Route exact path="/create">
	        <Create />
	    </Route>
	    </Switch>
	    <Switch>
	    <Route exact path="/">
	        <Home />
	    </Route>
	    </Switch>
                </div>
            </div>
	    </Router>
	  
  );
}// we cannot output objects like dictonaries using {}

export default App;
