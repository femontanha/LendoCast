import React, { Component } from 'react';
import Episode from '../Episode/Episode';

class EpisodesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
        }
    }
    
    componentDidMount() {
        fetch(`https://api.libsyn.com/post?show_id=126442`)
        .then(function(response) {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                episodes: myJson._embedded.item,
            })
        });
    }

    render () {
        return (
            <section className="episodes-list">
                {
                    this.state.episodes.length > 0 &&
                    this.state.episodes.map(episode => (
                        <Episode
                            key={ episode.id }
                            title={ episode.item_title }
                            link={ episode.primary_content.url }
                        />
                    ))
                }
            </section>
        );
    }
}

export default EpisodesList;