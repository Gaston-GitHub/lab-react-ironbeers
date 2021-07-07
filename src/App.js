import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="m-5">
      <NavBar />
      <Route exact path="/" component={Home}></Route>
      <Route path="/beers" component={Beers}></Route>
      <Route path="/random-beer" component={RandomBeer}></Route>
      <Route path="/new-beer" component={NewBeer}></Route>
      <Route path="/beers/:beerId" component={BeerDetails}></Route>
    </div>
  );
}

export default App;
