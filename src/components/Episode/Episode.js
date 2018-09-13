import React from 'react';
import './episode.css';

import playSVG from '../../images/play.svg';

const Episode = ({ date = '', title = '', link = '' }) => {
    return (
        <article className="episode">
            <div className="episode__date">
                { date }
            </div>
            <div className="episode__name">
                <h1 className="episode__name-title">{ title }</h1>
            </div>
            <div className="episode__actions">
                <a className="episode__actions__play-link" href={ link } target="_blank">
                    <img className="episode__actions__play-img" src={ playSVG } alt="Tocar episódio" />
                </a>
            </div>
        </article>
    );
};

export default Episode;