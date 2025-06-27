import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const fruits:Array<string> = ["りんご", "バナナ", "オレンジ"];

  fruits.push("ぶどう");

  return (
    <>
      <ul>
        フルーツは{fruits.length}個あります。
      </ul>
    </>
  )
}

export default App
