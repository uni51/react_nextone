/*
 * Reactのアプリの本体となるコンポーネント
 * index.jsから呼び出されてHTMLの特定のdivタグにマウントされる
 *
 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      /* class属性は、JSX上ではclassName属性に記述 */
      <div className="App">
        <header className="App-header">
          {/* src、alt属性は、JSXでも同じ */}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
