import React, { useState } from 'react';
import './App.css';



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
      
      <h1 className="text-3xl font-bold underline md:text-center mt-20">{advice}</h1>
      <div className="text-center mt-20">
     
      <button onClick={getQuote} className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center">Get Quote</button>
     
      </div>
     
      <h1 className="text-center md:text-right text-3xl mt-20">{text}</h1>
      <div className="m-20">
      <button onClick={getChange}className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center relative">Infi8ite Quote</button>
      </div>
      
        <div className="m-30 text-center">
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
    </div>
  );
}
