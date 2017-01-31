import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Speed from './Speed';
import Rounds from './Rounds';
import Duration from './Duration';
import StartBtn from './StartBtn';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React-Halo</h2>
                </div>

                <Speed />
                <Rounds />
                <Duration />
                <StartBtn name="Testing props" />

            </div>
        );
    }
}

export default App;
