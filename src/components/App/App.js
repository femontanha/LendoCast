import React, { Component } from 'react';
import Header from '../Header/Header';
import EpisodesList from '../EpisodesList/EpisodesList';
import episodes from '../../static/episodes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <EpisodesList episodes={ episodes } />
      </div>
    );
  }
}

export default App;
