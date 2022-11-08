import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [string1, setString1] = useState(0);
  
  useEffect(() => {
	fetch("/api/summoner/afrozone").then(res => res.json()).then(data => {
		setString1(data[0])
	})
  }, [string1]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Last game played: {string1}</p>
      </header>
    </div>
  );
}

export default App;
