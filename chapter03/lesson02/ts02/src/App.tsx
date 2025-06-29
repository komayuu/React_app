import './App.css'

function App() {

  const isEditable:boolean = true;
  const userName:string = "山田太郎";

  if ( isEditable ) {
    return (
      <>
        <p>お名前：</p>
        <input type="text" placeholder={userName}/>
      </>
    );
  } else {
    return (
      <>
        <p>お名前：</p>
        <p>{userName}</p>
      </>
    );
  }
}

export default App