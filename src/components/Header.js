import React from 'react';
import '../css/Header.css';

const Header = ({ score, level, bestScore }) => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>
          <h1>Memory Game</h1>
        </div>
        <div className='game-info'>
          <div className='score'>Score: {score}</div>
          <div className='highScore'>High Score: {bestScore}</div>
          <div className='gameLevel'>Level: {level}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
