import React, { useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [text, setText] = useState('');

  async function getQuote() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  function getChange() {
    let newText = '';

    for (let i = 0; i <= 69 ; i++) {
      setTimeout(async () => {
        const timestamp = Date.now(); // Unique timestamp for each request
        const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
        const data = await res.json();
        newText += data.slip.advice + '\n';
        setText(newText);
      }, i * 800); // Delay of i seconds (1000 milliseconds) before each iteration
    }
  }

  return (
    <div>
      <h1 style={{ background: 'red' }}>{advice}</h1>

      <button
        onClick={getQuote}
        style={{
          margin: '100px 250px',
          height: '100px',
          width: '1000px',
          background: 'lightblue'
        }}
      >
        getQuote
      </button>

      <h1 style={{ background: '#484443', color: '#484443' }}>{text}</h1>

      <button
        onClick={getChange}
        style={{
          margin: '50px 500px',
          alignleft:'300px',
          flex: 'Auto',
          height: '100px',
          width: '500px',
          background: '1d232d'
        }}
      >
        Double Quote
      </button>
    </div>
  );
}
