import React from 'react';
import Episode from '../Episode/Episode';

const EpisodesList = ({ episodes = [] }) => {
    return (
        <section className="episodes-list">
            {
                episodes.map(episode => (
                    <Episode
                        key={ episode.date }
                        date={ episode.date }
                        title={ episode.title }
                        link={ episode.link }
                    />
                ))
            }
        </section>
    );
};

export default EpisodesList;