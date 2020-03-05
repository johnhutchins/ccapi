import React from 'react';
import './css/App.css';

import Graph from './components/Graph'
import Stopwatch from './components/Stopwatch-v2'
import Stats from './components/Stats'
import Nav from './components/Nav'
import Chart from './components/Chart'

function App() {
  return (
    
    <div className="content">
      <header className="App-header">
        <h2>Cycle Cycle</h2>
      </header>
      <main >
        <Graph />
        <Stopwatch />
        <Stats />
        <Chart />
        <Nav />
        
      </main>
    </div>
    
  );
}

export default App;
