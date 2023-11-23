import {useState} from "react";


export default function App() {
const [advice, setAdvice] = useState("");
const [text, setConsole] = useState("");


async function getQuote() {

const res = await fetch("https://api.adviceslip.com/advice");
const data = await res.json();
setAdvice(data.slip.advice);

}

async function getChange ()  {

const tmp = await fetch("https://api.adviceslip.com/advice");
var info = await tmp.json();

setConsole(info.slip.advice);

}

  return (
            <div>
            <h1 style={{background: "red"}}>
            {advice}
            </h1>

           
            
           <button onClick={getQuote} style= {{margin: "30px", 
           height: "100px", width: "100px", 
           background: "lightblue"}}> getQuote </button>
           
           
            <h2>
             {text}
            </h2>

            <button onClick={getChange}>
              console
            </button>
            
            </div>    

  );
}
