import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActivityPage from './pages/ActivityPage';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import UserActivity from './Account/Activity/UserActivity'
import Setting from './Account/Settings/Setting'
import UpdateProfile from './Account/UpdateProfile/UpdateProfile'
import Group from './Account/Groups/Group'
import CreateActivity from './pages/CreateActivity';

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/Login" >
      <Login/>
    </Route>
    <Route path="/Register">
      <Register/>
    </Route>
    <Route path="/UserActivity">
      <UserActivity/>
    </Route>
    <Route path="/Setting">
      <Setting/>
    </Route>
    <Route path="/UpdateProfile">
      <UpdateProfile/>
    </Route>
    <Route path="/Group">
      <Group/>
    </Route> 
    <Route 
      path="/activity/:id"
      children={({match}) => (<ActivityPage id={match.params.id}/>)}
    />
    <Route path="/create">
      <CreateActivity/>
    </Route>
  </Switch>
);

export default Main;
