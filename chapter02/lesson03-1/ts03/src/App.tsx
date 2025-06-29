import { useState } from 'react'
import './App.css'

function App() {

  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  // 入力が変更されたら毎回呼び出されるハンドラ
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 入力値を保存
    setInputText(e.target.value);
  }

  const handleClick = () => {
    // 空白が登録されないようにチェック
    if (inputText != "") {
      const newTodo: Todo = { text: inputText, completed: false };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
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
            // inputTextを連動させる
            value={inputText}
            onChange={handleChangeText}
          />
          <button className='add-button' onClick={handleClick}>追加</button>
        </div>
      </div>

      <ul className='todo-list'>
        {todos.map((todo, index) => {
          if ( todo.completed == true ) {

            return (
              <li key={index} className='todo-item'>
                <span className='completed'>
                  {todo.text}
                </span>
              </li>
            );

          } else {

            return (
              <li key={index} className='todo-item'>
                <span>
                  {todo.text}
                </span>
              </li>

            )
          }
        })}
      </ul>
    </>
  )
}

export default App