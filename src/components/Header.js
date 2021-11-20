import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>
          <h1>Memory Game</h1>
        </div>
        <div className='game-info'>
          <div className='score'>Score: </div>
          <div className='highScore'>High Score: </div>
          <div className='gameLevel'>Level :</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
