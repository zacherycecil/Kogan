import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Product = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
	setData("afrozone");
  };
  return (
	<div>
		<p>ProductPage</p>
	</div>
  );
};
