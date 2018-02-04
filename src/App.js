import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
        </header>
        <div className="Todo-app">
          <form>
            <input type="text"/>
          </form>
          <div>
            <ul>
              <li>
                <input type="checkbox"/> Create static ui
              </li>
              <li>
                <input type="checkbox"/> Create initial state
              </li>
              <li>
                <input type="checkbox"/> Use state to render ui
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
