import React, { Component } from 'react';
import classNames from 'classnames';
import Header from '../Header/Header';
import EpisodesList from '../EpisodesList/EpisodesList';
import Player from '../Player/Player';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.playButtonClick = this.playButtonClick.bind(this);

    this.state = {
      title: '',
      url: '',
      thumb: '',
    }
  }

  playButtonClick(title, url, thumb) {
    console.log(title)
    console.log(url)
    console.log(thumb)
    this.setState({
      title,
      url,
      thumb,
    });
  }

  render() {
    const { title, url, thumb } = this.state;

    const appCSS = classNames(
      'app',
      { 'app--has-player': !!url },
    );

    return (
      <div className={ appCSS }>
        <Header />
        <EpisodesList
          playButtonClick={ this.playButtonClick }
        />
        <Player
          title={ title }
          url={ url }
          thumb={ thumb }
          visible={ !!url }
        />
      </div>
    );
  }
}

export default App;
