import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Person型を定義
  type Person = {
    name: string,
    city: string,
    birthday: string,
  }
  // 1人目のデータ
  const person1:Person = {
    name: "山田",
    city: "東京都",
    birthday: "2000年01月01日",
  }
  // 2人目のデータ
  const person2:Person = {
    name: "田中",
    city: "大阪府",
    birthday: "2002年02月02日",
  }
	
  // 配列に２人分のデータを保存
  const people:Array<Person> = [person1, person2];

  return (
    <>
      <h1>名簿</h1>
      <table>
        <thead>
          <th>名前</th>
          <th>都道府県</th>
          <th>生年月日</th>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.city}</td>
              <td>{person.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
