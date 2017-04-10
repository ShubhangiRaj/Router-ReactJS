import React, { Component } from 'react';
import {Link} from 'react-router';

class Implementation extends Component {
    render() {
        return (
            <div>
              <h2>How to achieve routing?</h2>
              <p>Following are the links which I have used to build this SPA:</p>
              <h3>Credits to:</h3>
              <ol>
                <li><a href="https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm" target="_blank">
                    Creating a SPA in React using React Router - by Kirupa</a>
                </li>
                <li><a href="https://www.tutorialspoint.com/reactjs/reactjs_router.htm" target="_blank">
                    Tutorialspoint, ReactJS - Router</a>
                </li>
                <li><a href="https://scotch.io/tutorials/routing-react-apps-the-complete-guide" target="_blank">
                    Routing React Apps: The Complete Guide - by Chris Nwamba</a>
                </li>
              </ol>

              <h3>Official guide:</h3>
              <ul>
                <li><a href="https://github.com/ReactTraining/react-router" target="_blank">react-router</a></li>
                <li><a href="https://github.com/ReactTraining/react-router/blob/v3.0.0/docs/guides/Histories.md" target="_blank">More on react-router histories</a></li>
              </ul>

              <h3>Implementing a nested route</h3>
              <ul>
                <li><Link to="/implementation/nested" activeClassName="active">Click me to display nested view</Link></li>
                {this.props.children}
              </ul>
            </div>
          );
    }
}

export default Implementation;
