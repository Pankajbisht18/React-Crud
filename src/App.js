import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Add from './Components/Add';
import Home from './Components/Home';
import Update from './Components/Update';

const App = () => {
  return(
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/update/:roll" component={Update} />
      </Switch>
    </>
  );
}
export default App;