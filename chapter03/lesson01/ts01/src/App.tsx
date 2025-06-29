import './App.css'

function App() {
	
	// 日付を扱う準備。Date型の変数を用意する
  const date:Date = new Date();
  // 年を取得
  const year:number = date.getFullYear();
  // 月を取得
  const month:number = date.getMonth();
  // 日付を取得
  const day:number = date.getDate();
  // 時間を取得
  const hour:number = date.getHours();
  // 分を取得
  const minutes:number = date.getMinutes();
  // 秒を取得
  const second:number = date.getSeconds();

  return (
    <div>
      <h1>年</h1>
      <h2>{year}</h2>

      <h1>月</h1>
      <h2>{month + 1}</h2>

      <h1>日</h1>
      <h2>{day}</h2>

      <h1>時間:分:秒</h1>
      <h2>{hour} : {minutes} : {second}</h2>

    </div>
  );

}

export default App