import React, { Component } from 'react';
import Episode from '../Episode/Episode';
import Loading from '../Loading/Loading';
import config from '../../config';

// const VERSION = config.version;
const API_URL = `https://${ config.libsyn_api }/post?show_id=${ config.show_id }`;
// const API_URL_VERSION = `${ API_URL }&v=${ VERSION }`;

class EpisodesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            isLoading: false,
        }
    }
    
    componentDidMount() {

        // caches.open('LendoCast').then((cache) => {
        //     cache.match(API_URL_VERSION)
        //     .then((response) => {
        //         if (!response) {
                    this.setState({ isLoading: true });

                    fetch(API_URL)
                    .then((result) => {
                        return result.json();
                    })
                    .then((myJson) => {
                        // delete old version
                        // cache.delete(`${ API_URL }&v=${VERSION - 1}`);
                        // cache.put(API_URL_VERSION, new Response(JSON.stringify(myJson)));

                        this.setState({
                            episodes: myJson._embedded.item,
                            isLoading: false
                        })
                    });
        //         } else {
        //             response.text().then(text => {
        //                 this.setState({
        //                     episodes: JSON.parse(text)._embedded.item,
        //                 })
        //             })
        //         }
        //     });
        // });
    }

    render () {
        const { isLoading, episodes } = this.state;

        if (isLoading) {
            return <Loading />
        }

        return (
            <section className="episodes-list">
                {
                    episodes.map(episode => (
                        <Episode
                            key={ episode.id }
                            title={ episode.item_title }
                            link={ episode.primary_content.secure_url }
                            thumb={ episode.thumbnail.url }
                            onClick={ this.props.playButtonClick }
                        />
                    ))
                }
            </section>
        );
    }
}

export default EpisodesList;