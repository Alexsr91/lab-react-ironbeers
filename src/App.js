import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Homepage from './componets/Home'
import Beers from './componets/Beers'
import BeerDetail from './componets/BeerDetail'

function App() {
  return (
    <div>
  
  <Switch>
        {/* <Route exact path='/' component={Home}></Route> */}
        {/* <Route exact path='/education' component={Education}></Route> */}
        {/* Route is setting props.match.params.theID for us in the component */}
        <Route path='/Beers/:myBeerIDThingy' component={BeerDetail}></Route>
        <Route path='/Beers' component={Beers}></Route>
        <Route path='/' component={Homepage}></Route>
   </Switch>

    </div>
  );
}


export default App;