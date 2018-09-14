import React from 'react';
import './episode.css';
import playSVG from '../../images/play.svg';

const Episode = ({ title = '', link = '', thumb = '', onClick }) => {
    return (
        <article className="episode">
            <div className="episode__name">
                <h1 className="episode__name-title">{ title }</h1>
            </div>
            <div className="episode__actions">
                <button className="episode__actions__play-link" onClick={ () => onClick(title, link, thumb) }>
                    <img className="episode__actions__play-img" src={ playSVG } alt="Tocar episódio" />
                </button>
            </div>
        </article>
    );
};

export default Episode;