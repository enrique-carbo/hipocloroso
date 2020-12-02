import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Medicine from './pages/Medicine'
import Vet from './pages/Vet'


function App() {

  return (
    <HashRouter basename='/hipocloroso'>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/medicine" component={Medicine}/>
        <Route exact path="/vet" component={Vet}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
