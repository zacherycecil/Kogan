import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/summoner/afrozone').then(res => res.json()).then(data => {
      setCurrentTime(data[0]);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Last game played: {fetch('/api/summoner/afrozone')[0]}</p>
      </header>
    </div>
  );
}

export default App;
