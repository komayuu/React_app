import { useState } from 'react'
import './App.css'

function App() {

  const [todoList, setTodoList] = useState<string[]>(["タスクA", "タスクB", "タスクC"]);

  const handleClick = () => {
    setTodoList([...todoList, "新しいタスク"]);

  }

  return (
    <>
      <div className="app-container">
        <h1>シンプルTodoアプリ</h1>
        <div>
          <input
            type='text'
            placeholder='新しいタスクを入力'
            className='todo-input'
          />
          <button className='add-button' onClick={handleClick}>追加</button>
        </div>
      </div>

      <ul className='todo-list'>
        {todoList.map((todo, index) => {
          return (
            <li key={index} className='todo-item'>{todo}</li>
          );
        })}
      </ul>
    </>
  )
}

export default App