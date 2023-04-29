import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import axios from 'axios';

// Comps
import { Ranked } from './Ranked';
import { Champion } from './Champion';

// Style
import '../styles/Summoner.css';

// Get API calls ------------------------------------

const getSummonerInfo = async (name) => {
	const res = await axios.get('/api/summoner/' + name);
	return res.data;
}

// Component ----------------------------------------

export const Summoner = () => {

	// useState
	const { nameURL } = useParams();
	const [level, setLevel] = useState(0);
	const [id, setId] = useState('');
	const [tftId, setTftId] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		getSummonerInfo(nameURL).then(res =>
			setLevel(res[0]['summonerLevel']) & setName(res[0]['name']) & setId(res[0]['id']) & setTftId(res[1]['id'])
		);
	}, [nameURL]);

	return (
		<div>
			<div>
				{name === ''
					? <Header pageName='Loading ...' />
					: <Header pageName={name + ' (Level ' + level + ')'} />
				}
			</div>
			{<Ranked id={id} tftId={tftId} />
			}
			<div className='rankedInfo'>
				<h3>Champion Mastery</h3>
				<div>
					{
						<Champion id={id} />
					}
				</div>
			</div>
		</div>
	);
};
