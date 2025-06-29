import './App.css'
function App() {

  let num1: number = 10;
  console.log("1. num1は" + num1);
  console.log("2. ++num1は" + ++num1);
  console.log("3. num1++" + num1++);
  console.log("4. 現在のnum1は", num1);
  console.log("5. num1+=1", num1+=1);
  console.log("6. num1+=100 (num1 = num1 + 100)", num1+=100);
  console.log("7. num1-=100 (num1 = num1 - 100)", num1);

  const text = "Hello, World!";
  console.log(text.indexOf("World")); // 出力: 7

  return (
    <>
      <h1>Typescriptの学習</h1>
    </>
  )
}

export default App