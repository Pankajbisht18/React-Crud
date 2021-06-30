import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Add from './Components/Add';
import Home from './Components/Home';

const App = () => {
  return(
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={Add} />
      </Switch>
    </>
  );
}
export default App;