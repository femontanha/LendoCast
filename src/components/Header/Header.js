import React from 'react';
import logoSVG from '../../images/logo.svg';
import './header.css';

const Header = () => {
    return (
        <header className="app__header">
          <img className="app__header-logo" src={ logoSVG } alt="LendoCast" />
        </header>
    );
};

export default Header;