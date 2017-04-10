import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import App from './App';

    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>,
      document.getElementById('root')
    );