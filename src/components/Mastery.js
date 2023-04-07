import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { League } from './League';
import { Header } from './Header';
import axios from 'axios';

// Style
import '../styles/Summoner.css';

export const Summoner = () => {

  // useState & useParam
  const [summonerInfo, setSummonerInfo] = useState([]);
  const [leagueInfo, setLeagueInfo] = useState([]);
  const [masteryInfo, setMasteryInfo] = useState([]);
  const [queueInfo, setQueueInfo] = useState([]);
  const [championInfo, setChampionInfo] = useState([]);
  const [isRanked, setIsRanked] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { name } = useParams();

  const setQueueType = async (queueName) => {
    // loop through queues to find the one you want based on name (string input)
    setLoading(true);
    setIsRanked(false);
    for (let i=0; i<leagueInfo.length; i++) {
      let queue = leagueInfo[i];
      if(queue['queueType'] === queueName)
      {
        await setQueueInfo(queue);
        setIsRanked(true);
      }
    }
    setLoading(false);
  }

  const handleChange = (event) => {
    setQueueType(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const fetchInfo = async () => {

      // api call for summonerInfo
      const respSummoner = await axios
        .get('/api/summoner/' + name);
      setSummonerInfo(respSummoner.data); 

      // get ID from previous api call
      const id = respSummoner.data['id']

      // api call for leagueInfo
      axios
        .get('/api/league/' + id)
        .then((res) => {
          setLeagueInfo(res.data);

          // set queue type
          const queues = res.data;
          setIsRanked(false);
          for (let i=0; i<queues.length; i++) {
            let queue = queues[i];
            if(queue['queueType'] === "RANKED_SOLO_5x5")
            {
              setQueueInfo(queue);
              setIsRanked(true);
              setLoading(false);
            }
          }
        });

      // api call for mastery
      axios
        .get('/api/mastery/' + id)
        .then((res) => {
          setMasteryInfo(res.data);
      });

      // api call for mastery
      axios
        .get('/api/champion')
        .then((res) => {
          setChampionInfo(res.data);
      });
    };  
    fetchInfo();
  }, []);

  return (
    <div>
      {loading
        ? <Header pageName='Loading ...'/>
        : <Header pageName={summonerInfo['name'] + ' Summoner Page'}/>
      }
      <div className='rankedInfo'>
        <h2>Level {summonerInfo['summonerLevel']}</h2>
         
        <label>
          Queue Type: 
          <select onChange={handleChange}>
            <option value="RANKED_SOLO_5x5">Solo Queue</option>
            <option value="RANKED_FLEX_SR">Ranked Flex</option>
            <option value="RANKED_TFT_DOUBLE_UP">Teamfight Tactics</option>
          </select>
        </label>

        {!loading &&
          <h2>
            { isRanked
              ? queueInfo['tier'] + ' - ' + queueInfo['rank'] 
                + ' (' + queueInfo['leaguePoints'] + ' LP) '
                + queueInfo['wins'] + 'W - ' + queueInfo['losses'] + 'L'
              : 'Unranked'
            }
          </h2>
        }
      </div>
      <div className='rankedInfo'>
        <h2>Level {summonerInfo['summonerLevel']}</h2>
        <p>{JSON.stringify(masteryInfo)}</p>
      </div>
    </div>
  );
};



