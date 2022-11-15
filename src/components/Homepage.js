import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const Homepage = () => {

  const navigate = useNavigate();
  const [summonerName, setSummonerName] = useState("");

  const handleChange = (event) => {
    setSummonerName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(summonerName.length > 0)
      navigate('/summoner/' + summonerName)
  }

  return (
    <div className="sitewide">
      
      <Link to='/login'>Login</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Search Summoner Name:
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
