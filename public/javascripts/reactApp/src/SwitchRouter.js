import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';


export const SwitchRouter = (props) => (
  <React.Fragment>
    <Route path="/" exact component={ Home } />
    <Route path="/login" exact component={ Login } />
  </React.Fragment>
)