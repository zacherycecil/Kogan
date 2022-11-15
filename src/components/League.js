import React, { useEffect, useState } from 'react';

export const League = (props) => {
  const { id } = props;
  const [leagueInfo, setLeagueInfo] = useState([]);

  useEffect(() => {
    fetch('/api/league/' + id).then(res => res.json()).then((data) =>
      setLeagueInfo(data)
    )
  }, []);

  return ( 
    <p> 
      { console.log(JSON.stringify(leagueInfo)) } 
    </p>
  );
};