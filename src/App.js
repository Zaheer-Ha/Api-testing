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
    const interval = setInterval(async () => {
      const timestamp = Date.now(); // Unique timestamp for each request
      const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
      const data = await res.json();
      setText(prevText => prevText + data.slip.advice + '\n');
    }, 800);

    // Stop the interval after a certain duration (in this case, 70 * 800 milliseconds)
    setTimeout(() => {
      clearInterval(interval);
    }, 70 * 800);
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