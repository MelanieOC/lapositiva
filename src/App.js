import React, { Component } from 'react';
import { Inicio, Vista2, Saludo, Pregunta } from './Componentes';
import './App.css';
import { connect } from "redux-zero/react";
import {
  HashRouter,
  Redirect,
  NavLink,
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import { ChatReport } from './ChatReport';
import Parts from './Parts';
import Camera from './camera';
import { Login } from './Login';
import Abstract from './Abstract';
import AddPhoto from './AddPhoto';
import Map from './Map';

const App = ({ chatComent, wordsIdentify, selected, next, parts, properties, activeProperty, targetPlace, isRouting, info }) => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Inicio />} />
          <Route path="/question" render={() => <Saludo />}/>
          <Route path="/info" render={() => <Pregunta />}/>
          <Route path="/chat" render={() => <Vista2 />}/>
          <Route path="/chatReport" render={() => <ChatReport />} />
          <Route path="/showParts" render={() => <Parts />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/addPhoto" render={() => <AddPhoto />} />
          <Route path="/camera" render={() => <Camera />} />
          <Route path="/map" render={() => <Map />} />
          <Route path="/abstract" render={() => <Abstract parts={parts} info={info} />} />
          <Route path='/hack' render={() => <Redirect to="/chatReport" />} />
        </Switch>
      </HashRouter>
    </div>
  )
}
const mapToProps = ({ chatComent, wordsIdentify, selected, next, parts, properties, activeProperty, targetPlace, isRouting, info }) => ({ chatComent, wordsIdentify, selected, next, parts, properties, activeProperty, targetPlace, isRouting, info });

export default connect(mapToProps)(App);

