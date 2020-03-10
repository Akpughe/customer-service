import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Customer from './Customer';
import Support from './Support';
import './App.css';
import './css/normalize.css'
import './css/skeleton.css'

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Customer />} />
      <Route exact path="/support" render={() => <Support />} />
    </div>
  );
}

export default App;
