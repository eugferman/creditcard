import React from 'react';
import './App.css';
import Card from './card/Card.js';
import Card2 from './card2/Card2.js';

function App() {
  return (<div className="app-card">
            <div><Card/></div>
            <div><Card2 /></div>
          </div>)
}

export default App;
