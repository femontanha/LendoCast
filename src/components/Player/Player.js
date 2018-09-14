import React from 'react';
import Plyr from 'react-plyr';
import classNames from 'classnames';
import './plyr.css';
import './player.css';

const Player = ({ url = '', visible = false, title = '', thumb = '' }) => {
    const playerCSS = classNames(
        'app__player',
        { 'app__player--disabled': !visible },
    );

    return (
        <div className={ playerCSS }>
            <div className="app__player__episode">
                <img className="app__player__episode-thumb" src={ thumb } alt={ title } />
                <p className="app__player__episode-title">
                    { title }
                </p>
                
            </div>
            <Plyr
                type="audio"
                url={ url }
            />
        </div>
    );
};

export default Player;