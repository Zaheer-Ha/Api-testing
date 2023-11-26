import React, { useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [text, setText] = useState('');

  async function getQuote() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  async function getChange() {
    let newText = '';

    for (let i = 0; i < 10; i++) {
      const timestamp = Date.now(); // Unique timestamp for each request
      const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
      const data = await res.json();
      newText += data.slip.advice + '\n';
    }

    setText(newText);
  }

  return (
    <div>
      <h1 style={{ background: 'red' }}>{advice}</h1>

      <button
        onClick={getQuote}
        style={{
          margin: '30px',
          height: '100px',
          width: '1000px',
          background: 'lightblue'
        }}
      >
        getQuote
      </button>

      <h1 style={{ background: '#484443', color: '#f1f1f1' }}>{text}</h1>

      <button
        onClick={getChange}
        style={{
          margin: '30px',
          height: '100px',
          width: '1000px',
          background: '1d232d'
        }}
      >
        Double Quote
      </button>
    </div>
  );
}
