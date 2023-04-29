import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Style
import '../styles/Summoner.css';


// API Calls ---------------------------------------------
const getLeague = async (id, tftId) => {
  const r1 = await axios.get('/api/league/' + id)
  const r2 = await axios.get('/api/tftleague/' + tftId)

  return [...r1.data, r2.data[0]];
}

// Component ----------------------------------------------
export const Ranked = (props) => {

  // useState
  const [league, setLeague] = useState([]);
  const [isRanked, setIsRanked] = useState(false);
  const [tier, setTier] = useState(false);
  const [rank, setRank] = useState(false);
  const [lp, setLP] = useState(false);
  const [wins, setWins] = useState(false);
  const [losses, setLosses] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Functions
  const setQueueData = async (league, queueId) => {
    setIsRanked(false);
    for (let i = 0; i < league.length; i++) {
      let q = league[i];
      if (q['queueType'] === queueId) {
        setTier(q['tier'])
        setRank(q['rank'])
        setLP(q['leaguePoints'])
        setWins(q['wins'])
        setLosses(q['losses'])
        setIsRanked(true);
      }
    }
    setLoaded(true)
  }

  const handleChange = (event) => {
    setQueueData(league, event.target.value);
  };

  // USE EFFECT --------------------------------------------
  useEffect(() => {
    props.id &&
    getLeague(props.id, props.tftId).then(res => 
      setLeague(res) & setQueueData(res, "RANKED_SOLO_5x5"));
  }, [props.id]);

  return (
    <div className='rankedInfo'>
      <h3>Ranked Queues</h3>

      <label>
        Queue Type:
        <select onChange={handleChange}>
          <option value="RANKED_SOLO_5x5">Solo Queue</option>
          <option value="RANKED_FLEX_SR">Ranked Flex</option>
          <option value="RANKED_TFT_DOUBLE_UP">TFT Double Up</option>
          <option value="RANKED_TFT">TFT Ranked</option>
        </select>
      </label>

      <h4>
        {!loaded ? 'LOADING ...' : isRanked
          ? tier + ' - ' + rank
          + ' (' + lp + ' LP) '
          + wins + 'W - ' + losses + 'L'
          :  'UNRANKED'
        }
      </h4>
    </div>
  );
};
