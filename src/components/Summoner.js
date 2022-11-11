import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Summoner = () => {
  const [gameData, setGameData] = useState([]);
  const { name } = useParams();

  let counter = 0;
  const listItems = gameData.map((game) =>  
      <li key={counter++}>{game}</li>,
    )

  useEffect(() => {
	fetch('/api/summoner/' + name).then(res => res.json()).then(data => {
		setGameData(data)
	})
  }, []);

  return (
    <div>
      <h1>Summoner Stats</h1>
        <ul> {listItems} </ul>
    </div>
  );
};
