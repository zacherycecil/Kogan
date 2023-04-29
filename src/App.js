import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { Link, useNavigate, withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

// Components
import { Homepage } from './components/Homepage';
import { Summoner } from './components/Summoner';
import { Login } from './components/Login';

export default function App() {

    const [pageName, setPageName] = useState("Homepage");

    return (
        <Router>
            <div className="sitewide">
                <Routes>
                    <Route exact path='/' element={<Homepage/>}/>
    	    	    <Route exact path='/summoner/:nameURL' element={<Summoner/>} pageName='Summoner Page'/>
                    <Route exact path='/login' element={<Login/>}/>
    	       </Routes>
            </div>
        </Router>
    );
}
