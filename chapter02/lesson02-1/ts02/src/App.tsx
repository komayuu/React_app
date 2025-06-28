import './App.css'

function App() {
  
  const ProfileCard = (props) => {
    return (
      <div className="card">
        <img src="vite.svg" alt="プロフィール画像" />
        <h2 className='title'>{props.name}</h2>
        <div>
          <p>職業: {props.occupation}</p>
          <p>趣味: {props.hobbies}</p>
        </div>
        <p><button>Contact</button></p>
      </div>
    )
  }

  return (
    <>
      <ProfileCard imageUrl="vite.svg" name="山田 太郎" occupation="プロジェクトマネージャー" hobbies="プログラミング、読書"/>
      <ProfileCard imageUrl="vite.svg" name="鈴木 花子" occupation="ソフトウェアエンジニア" hobbies="ピアノ、映画鑑賞" />
    </>
  )
}

export default App