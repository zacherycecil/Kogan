import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Summoner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
	fetch("/api/summoner/afrozone").then(res => res.json()).then(data => {
		setProducts(data[0])
	})
  }, []);

  const fetchProducts = () => {
    
  };

  return (
    <div>
      <h1>Summoner Stats</h1>
      <div>
      </div>
    </div>
  );
};


