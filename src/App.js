import React, { useState, useEffect } from 'react';
import Summoner from './Summoner';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Homepage from './components/Homepage.js';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route key="homepage" exact path={['/', '/homepage']}>
                    <Homepage />
                </Route>
	    </Routes>
        </Router>
    );
}

