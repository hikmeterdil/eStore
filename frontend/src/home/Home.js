import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Categories from './Categories';

import './Home.css';

const Home = () => {
  return (
    <div className="home-home">
      <Header/>
      <Route path="/home/categories" component={Categories}/>
      <Footer/>
    </div>
  )
};

export default Home;