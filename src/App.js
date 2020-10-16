import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './Login';
import PrintResult from './PrintResult';

class App extends Component {
  render() {
    return (
    	<div>
      		<PrintResult />
    	</div>
    );
  }
}
export default App;
