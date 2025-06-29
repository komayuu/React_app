import './App.css'

function App() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      alert('Enterキーが押されました');
    }
  };

  return (
    <div>
      <h1>キーボードイベントの例</h1>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="ここに入力してください"
      />
    </div>
  );
}

export default App
