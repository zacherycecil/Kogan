import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Style
import '../styles/Summoner.css';

// EXT FUNC --------------------------------------------------------------------
const getChampions = async () => {
  const res = await axios.get('/api/champion');
  return res.data;
}

const getMastery = async (id) => {
  const res = await axios.get('/api/mastery/' + id);
  return res.data;
}



// COMPONENT ---------------------------------------------------------------------
export const Champion = props => {

  // use STATE
  const [champions, setChampions] = useState([]);
  const [champId, setChampId] = useState([]);
  const [champName, setChampName] = useState([]);
  const [champPoints, setChampPoints] = useState([]);

  // FUNC -----------------------------------------------------------------------
  const fetchChampName = (id) => {
    let myStr = '';
    champions.map(champ => {
      if (champ['key'] == id)
        myStr = champ['name']
    })
    return myStr
  }


  // USE EFFECT -----------------------------------------------------------------
  useEffect(() => {
    getChampions().then(res => setChampions(res)).then(
      props.id &&
      getMastery(props.id).then(res =>
        res.forEach(champ => {
          setChampId(champId => [...champId, champ['championId']])
          setChampName(champName => [...champName, fetchChampName(champ['championId'])])
          setChampPoints(champPoints => [...champPoints, champ['championPoints']])
        })
      ));
  }, [props.id]);

  // RETURN ------------------------------------------------------------------------
  return (
    <ul>
      {champId &&
        champId.map((champ, i) => {
          return <h4 key={champ}>{champName[i] + " - " + champPoints[i]}</h4>
        })}
    </ul>
  );
};
