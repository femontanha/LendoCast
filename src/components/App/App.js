import React, { Component } from 'react';
import Header from '../Header/Header';
import EpisodesList from '../EpisodesList/EpisodesList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <EpisodesList />
      </div>
    );
  }
}

export default App;
