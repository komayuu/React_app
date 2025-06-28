import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("おはようございます");

  const handleClick = () => {
    if(message == "おはようございます") {
      setMessage("こんにちは");
    } else {
      setMessage("おはようございます");
    }
  }

  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>挨拶を変更する</button>
    </>
  )
}

export default App
