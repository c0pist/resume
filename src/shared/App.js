import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import { Home, Channel, More } from '../pages';
import Home from '../pages/Home';
import Channel from '../pages/Channel';
import More from '../pages/More';

class App extends Component {
  render() {
    return (
      <router>
        <div>
          <Route exact path="/" Component={Home}/>
          <Route path="/channel" Component={Channel}/>
          <Route path="/more" Component={More}/>
        </div>
      </router>
    );
  }
}

export default App;
