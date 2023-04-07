import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Style
import '../styles/Summoner.css';

export const Champion = (champId) => {

  const [allChampionsInfo, setAllChampionsInfo] = useState([]);
  const [championInfo, setChampionInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      // api call for champion information
      console.log('/api/champion/' + champId)
      await axios('/api/champion/' + champId).then((res) => {
        setAllChampionsInfo(res.data);

        const champs = res.data.data
        console.log(res)
        for (let i=0; i<champs.length; i++) {
          let champ = champs[i];
          console.log(champ['key'] === champId)
          console.log(champId)
          console.log(champ['key'])
          if(champ['key'] === champId)
          {
            setChampionInfo(champ);
          }
        }
        setLoading(false);
      })
    }
    fetchInfo();
  }, [])

  const getChamp = async (id) => {
    // loop 
    for (let i=0; i<allChampionsInfo.length; i++) {
      let champ = allChampionsInfo[i];
      if(champ['key'] === id)
      {
        await setChampionInfo(champ);
      }
    }
    setLoading(false);
  }

  return (
    <p>
      { 
        championInfo.map((champ) =>
          {
          return champ['key']
          }
        ),
        JSON.stringify(championInfo)
      }
    </p>
  );
};
