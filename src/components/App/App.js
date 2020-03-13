import React, { Component } from 'react';

import './App.css';
import '../OrderOnline/OrderOnline';
import OrderOnline from '../OrderOnline/OrderOnline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderOnline />
      </div>
    );
  }
}

export default App;
