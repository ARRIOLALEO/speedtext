import React,{useState,useEffect} from 'react'

import './App.css';

function App() {
  const [inputWords ,setinputWords] = useState("")
  const [remainin,setRemaing] = useState(0)
  const [counter ,setCounter] = useState()
  const typingWords =(e)=>{
    const {value} = e.target
    setinputWords(prevWords => value )
  }

  useEffect(()=>{
    if(remainin !=0){
      const timer = setTimeout(()=>{
        setRemaing(prevRemaining=>prevRemaining - 1 )
      },1000)}
    else if(remainin === 0){
      countWords()
      document.querySelector("button").disabled= false
    }
  },[remainin])

  const start = () =>{
   setRemaing(timer => timer + 10)
   setinputWords(prevWords => "")
   setCounter(prevcounter => 0)
   document.querySelector("button").disabled= true
   document.querySelector("textarea").disabled= false
 }

  const countWords = () =>{
     setCounter(prevCounter => inputWords.trim().split(" ").length)
  }
  
  return (
    <div>
      <h1> Speed Text </h1>
      <textarea name="inputWords" disabled={counter !=0?true:false} value={inputWords}  onChange={typingWords}/>
      <h4>time Remainng {remainin !=0?remainin : 0}</h4>
      <button onClick={start} >start Game</button>
       <h1>Count {counter !=1?counter:0}</h1>
    </div>
  );
}

export default App;
