import React from 'react';
import '../css/Cards.css';
const Cards = ({ characters, changeScore }) => {
  console.log(characters);
  return (
    <>
      <div className='card-grid'>
        {characters.map((character, index) => (
          <div
            key={index}
            className='card'
            onClick={() => {
              changeScore(character.id);
            }}
          >
            <div className='card-image'>
              <img src={character.image} alt='' />
            </div>
            <div className='card-footer'>{character.character}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
