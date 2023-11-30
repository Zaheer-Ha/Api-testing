import React, { useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [text, setText] = useState('');

  async function getQuote() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  function resetAdvice() {
    setAdvice('');
    
    return setText('');
  
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
      
      <h1 style={{ background: '#484443', color: '#ffffff', padding: '10px'  }}>{advice}</h1>

      <button
        onClick={getQuote}
        style={{
          margin: '40px 680px',
          height: '40px',
          width: '120px',
          background: 'lightblue'
        }}
      >
        Get Quote
      </button>

      <h1 style={{ background: '#484443', color: '#ffffff', padding: '10px' }}>{text}</h1>

      <button
        onClick={getChange}
        style={{
          margin: '40px 635px',
          height: '40px',
          width: '220px',
          background: '#1d232d',
          color: '#ffffff'
        }}
      >
        Infinite Quote
      </button>

      <button onClick={resetAdvice} style={{
        margin: '40px 680px',
        height: '50px',
        width: '120px',
        background: '#1d232d',
        color: 'RED' 
      }}>
        Reset
      </button>
    </div>
  );
}
