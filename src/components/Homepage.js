import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import '../styles/Homepage.css';

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
	    <h1>
	      Home Page
	    </h1>
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
