import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
	    <Route exact path="/">
	        <Home />
	    </Route>
	    <Route path='/blogs/:id'>
	       <BlogDetails />
	    </Route>
	    
	    <Route path="*">
	    <NotFound />
	    </Route>
	    </Switch>
                </div>
            </div>
	    
	    </Router>
	  
  );
}// we cannot output objects like dictonaries using {}

export default App;
