import React, { Component } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to My Home</h1>
                </header>
                <p className="App-intro">
                    Hello this is my Home
                </p>
                <YMInitializer accounts={[50198683]}/>
            </div>

        );
    }
}

export default App;
