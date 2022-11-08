import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [string1, setString1] = useState(0);
  
  useEffect(() => {
	fetch("/api/summoner/afrozone").then(res => res.json()).then(data => {
		setString1(data[0])
	})
  }, []);

  const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  );

  const Home = () => (
      <div className='home'>
        <h1>Welcome to my portfolio website</h1>
        <p> Feel free to browse around and learn more about me.</p>
      </div>
    );

    const About = () => (
      <div className='about'>
        <h1>About Me</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      </div>
    );

    const Contact = () => (
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
      </div>
    );

  const Main = () => (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    );

  return (
    <div className="App">
      <header className="App-header">
        <p>Last game played: {string1}</p>
      </header>
    </div>
  );
}

export default App;
