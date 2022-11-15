import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// Components
import { Homepage } from './components/Homepage';
import { Summoner } from './components/Summoner';
import { Login } from './components/Login';

export default function App() {

    return (
      


        <Router>
        
            <div>
        <header>
            <Link to="/" className="homeLink">
                <FontAwesomeIcon icon={faHouse} size="3x" className='homeButton'/>
                <h1>Kogan - Homepage</h1>
            </Link>
          </header>
      </div>
            <Routes>

                <Route exact path='/' element={<Homepage/>}/>
	    	    <Route exact path='/summoner/:name' element={<Summoner/>}/>
                <Route exact path='/login' element={<Login/>}/>
	       </Routes>
        </Router>
    );
}

