import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Channel, More } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" Component={Home}/>
        <Route path="/channel" Component={Channel}/>
        <Route path="/more" Component={More}/>
      </div>
    );
  }
}

export default App;