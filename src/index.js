import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import Introduction from './components/Introduction';
import Implementation from './components/Implementation';
import Contact from './components/Contact';
import Nested from './components/Nested';


    ReactDOM.render(
      	<Router history={hashHistory}>
        	<Route path="/" component={App}>
          		<IndexRoute component={Introduction}/>
          		<Route path="implementation" component={Implementation}>
                <Route path="nested" component={Nested}/>
              </Route>
          		<Route path="contact" component={Contact} />
        	</Route>
      </Router>,
      document.getElementById('root')
    );