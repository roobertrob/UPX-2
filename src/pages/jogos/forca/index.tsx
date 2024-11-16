import Image from 'next/image';
import { useState, useEffect } from 'react';

import animals from '@/data/animals.json';

const HangmanGame = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [normalizedWord, setNormalizedWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [hint, setHint] = useState('');
  const [location, setLocation] = useState('');
  const [mainCharacteristic, setMainCharacteristic] = useState('');
  const [gameWon, setGameWon] = useState(false);

  const initializeGame = () => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const word = randomAnimal.name.toUpperCase();
    const normalized = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    setSelectedWord(word);
    setNormalizedWord(normalized);
    setHint(randomAnimal.dietContents);
    setLocation(randomAnimal.location || 'Localização desconhecida');
    setMainCharacteristic(
      randomAnimal.mainCharacteristic || 'Característica desconhecida',
    );
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (
      normalizedWord &&
      normalizedWord
        .split('')
        .every(
          (letter) =>
            letter === ' ' || letter === '-' || guessedLetters.includes(letter),
        )
    ) {
      setGameWon(true);
    }
  }, [guessedLetters, normalizedWord]);

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter) || gameWon || incorrectGuesses >= 6)
      return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!normalizedWord.includes(letter)) {
      setIncorrectGuesses((prev) => prev + 1);
    }
  };

  const renderWord = () => {
    const words = selectedWord.split(' ');
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex gap-1 whitespace-nowrap">
            {word.split('').map((letter, index) =>
              letter === '-' ? (
                <span key={index} className="text-xl font-bold inline-block">
                  -
                </span>
              ) : guessedLetters.includes(
                  letter.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
                ) ? (
                <span
                  key={index}
                  className="border-b-2 border-primary-solid text-xl font-bold inline-block w-10"
                >
                  {letter}
                </span>
              ) : (
                <span
                  key={index}
                  className="border-b-2 border-primary-solid text-xl inline-block w-10"
                >
                  &nbsp;
                </span>
              ),
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderKeyboard = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((letter) => (
      <button
        key={letter}
        onClick={() => handleLetterClick(letter)}
        className={`m-1 w-10 h-10 rounded-full font-bold text-xl ${
          guessedLetters.includes(letter)
            ? 'bg-gray-300 cursor-not-allowed text-gray-400'
            : 'bg-gray-300 text-primary-solid'
        }`}
      >
        {letter}
      </button>
    ));
  };

  const renderHangman = () => {
    const parts = [
      <line
        key="right-leg"
        x1="50"
        y1="70"
        x2="60"
        y2="80"
        stroke="#10146D"
        strokeWidth="2"
      />,
      <line
        key="left-leg"
        x1="50"
        y1="70"
        x2="40"
        y2="80"
        stroke="#10146D"
        strokeWidth="2"
      />,
      <line
        key="right-arm"
        x1="50"
        y1="50"
        x2="60"
        y2="60"
        stroke="#10146D"
        strokeWidth="2"
      />,
      <line
        key="left-arm"
        x1="50"
        y1="50"
        x2="40"
        y2="60"
        stroke="#10146D"
        strokeWidth="2"
      />,
      <line
        key="body"
        x1="50"
        y1="40"
        x2="50"
        y2="70"
        stroke="#10146D"
        strokeWidth="2"
      />,
      <circle
        key="head"
        cx="50"
        cy="30"
        r="10"
        stroke="#10146D"
        fill="none"
        strokeWidth="2"
      />,
    ];

    return (
      <svg
        viewBox="0 0 100 100"
        className="w-full max-w-xs h-auto mx-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="50" y1="0" x2="50" y2="20" stroke="#10146D" strokeWidth="2" />
        <line x1="30" y1="0" x2="50" y2="0" stroke="#10146D" strokeWidth="2" />
        <line x1="30" y1="0" x2="30" y2="90" stroke="#10146D" strokeWidth="2" />
        <line
          x1="20"
          y1="90"
          x2="40"
          y2="90"
          stroke="#10146D"
          strokeWidth="2"
        />

        {parts.slice(incorrectGuesses)}
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <header className="flex items-center justify-start mb-6">
        <Image
          src="/solar_people-nearby-bold.svg"
          alt="Logo Forca"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-bold text-primary-bg-primary-solid">
          Forca
        </h1>
      </header>

      <div className="mb-6">{renderHangman()}</div>

      <div className="text-primary-solid font-semibold mb-4 text-lg space-y-4 flex flex-col">
        <div className="bg-blue-100 px-2 py-1 rounded-lg">
          Se alimenta de: {hint}
        </div>
        {incorrectGuesses >= 2 && (
          <div className="bg-blue-100 px-2 py-1 rounded-lg">
            Localização: {location}
          </div>
        )}
        {incorrectGuesses >= 4 && (
          <div className="bg-blue-100 px-2 py-1 rounded-lg">
            Característica Principal: {mainCharacteristic}
          </div>
        )}
      </div>

      <div className="my-6">{renderWord()}</div>

      {gameWon ? (
        <>
          <p className="text-green-700 text-2xl">Você Ganhou!</p>
          <button
            className="bg-primary-solid text-white py-3 px-6 rounded-lg text-lg mt-4"
            onClick={initializeGame}
          >
            Recomeçar
          </button>
        </>
      ) : incorrectGuesses >= 6 ? (
        <>
          <p className="text-red-700 text-2xl">
            Você Perdeu! Era: {selectedWord}
          </p>
          <button
            className="bg-primary-solid text-white py-3 px-6 rounded-lg text-lg mt-4"
            onClick={initializeGame}
          >
            Recomeçar
          </button>
        </>
      ) : (
        <>
          <div className="my-4 grid grid-cols-9 gap-2 justify-center">
            {renderKeyboard()}
          </div>
          <p className="text-red-500 mt-4">Erros: {incorrectGuesses} de 6</p>
        </>
      )}
    </div>
  );
};

export default HangmanGame;
