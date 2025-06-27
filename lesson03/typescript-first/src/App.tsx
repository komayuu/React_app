import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const fruits:Array<string> = ["りんご", "バナナ", "オレンジ"];
  fruits.push("ぶどう");

  const newFruits = fruits.map((fruit, index) => {
    return (
      <li>
        {index}番目に入っているのは{fruit}
      </li>
    );
  });

  return (
    <>
      <ul>
        {newFruits}
      </ul>
    </>
  )
}

export default App
