import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	        <IndexRoute component={Home} />
	        <Route path="home" component={Home} />
	        <Route path="about" component={About} />
	        <Route path="contact" component={Contact} />
	    </Route>
   </Router>,
  	<App />,
  	document.getElementById('root')
);
