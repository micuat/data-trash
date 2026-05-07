// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './components/Card';

const App = () => {
  const [memoryCard, setMemoryCard] = useState(null);
  const [questionCard, setQuestionCard] = useState(null);
  const [memoryCards, setMemoryCards] = useState([]);
  const [questionCards, setQuestionCards] = useState([]);

  useEffect(() => {
    const cardsUrl = `${process.env.PUBLIC_URL || ''}/cards.json`;

    fetch(cardsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load cards: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const memories = data.filter((item) => item.type === 'memory');
        const questions = data.filter((item) => item.type === 'question');
        setMemoryCards(memories);
        setQuestionCards(questions);
        drawCards(memories, questions);
      })
      .catch((error) => console.error('Error loading cards:', error));
  }, []);

  const drawRandom = (list) => {
    if (!list || list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  };

  const drawCards = (memories, questions) => {
    setMemoryCard(drawRandom(memories));
    setQuestionCard(drawRandom(questions));
  };

  return (
    <div className="container">
      <h1>Card Showcase</h1>
      <button id="drawCardButton" onClick={() => drawCards(memoryCards, questionCards)}>
        Draw Cards
      </button>
      <div className="cards-row">
        {memoryCard && <Card card={memoryCard} />}
        {questionCard && <Card card={questionCard} />}
      </div>
    </div>
  );
};

export default App;