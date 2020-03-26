import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Channel, More } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/channel" component={Channel}/>
        <Route path="/more" component={More}/>
      </div>
    );
  }
}

export default App;