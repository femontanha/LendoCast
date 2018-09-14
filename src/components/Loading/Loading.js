import React from 'react';
import loadingImg from '../../images/loading.gif';
import './loading.css';

const Loading = () => {
    return (
        <div className="app__loading">
            <img src={ loadingImg } alt="Carregando" />
        </div>
    );
};

export default Loading;