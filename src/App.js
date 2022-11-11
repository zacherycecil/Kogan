import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { Homepage } from './components/Homepage';
import { Summoner } from './components/Summoner';
import { Login } from './components/Login';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Homepage/>}/>
	    	    <Route exact path='/summoner/:name' element={<Summoner/>}/>
                <Route exact path='/login' element={<Login/>}/>
	       </Routes>
        </Router>
    );
}

