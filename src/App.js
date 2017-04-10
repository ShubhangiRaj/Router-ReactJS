import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {IndexLink, Link} from 'react-router';

class App extends Component{
      render() {
        return (
          <div>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Routers-in-React</h2>
            </div>
            <ul className="header">
              <li><IndexLink to="/" activeClassName="active">Introduction</IndexLink></li>
              <li><Link to="/implementation" activeClassName="active">Implementation</Link></li>
              <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        )
      }
   };


export default App;
