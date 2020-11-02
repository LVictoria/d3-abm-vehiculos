import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Vehiculos from './components/Vehiculos/Vehiculos';


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">Inicio</Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Vehiculos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;