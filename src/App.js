import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import getID from './getID';
import shuffle from './shuffle';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBest] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      setCharacters(await getCharacters());
    };

    loadCharacters();
  }, []);

  const changeScore = (id) => {
    if (clickedCharacters.some((c) => c.id === id)) {
      gameOver();
    } else {
      const clickedCharacter = characters.find((c) => c.id === id);

      setClickedCharacters([...clickedCharacters, clickedCharacter]);

      setScore((prevScore) => prevScore + 1);
      setCharacters(shuffle(characters));
    }
  };

  const gameOver = async () => {
    setScore(0);
    setBest(0);
    setCharacters(await getCharacters());
    setClickedCharacters([]);
    alert('Game Over');
  };
  const getCharacters = async () => {
    let characters = [];
    let response = await fetch(
      'https://thesimpsonsquoteapi.glitch.me/quotes?count=5',
    );

    response = await response.json();

    response.forEach((char) => {
      const id = getID();
      const character = char.character;
      const quote = char.quote;
      const image = char.image;

      characters.push({ id, character, quote, image });
    });

    console.log(characters);
    return characters;
  };

  return (
    <>
      <Header level={level} score={score} bestScore={bestScore} />
      <Cards characters={characters} changeScore={changeScore} />
    </>
  );
}

export default App;
