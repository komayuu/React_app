import './App.css'

function App() {

  // interfaceの場合
  interface ProfileProps {
    imageUrl?: string;
    name: string;
    occupation: string;
    hobbies?: Array<string>;
  }
  
  // imageUrlにデフォルト値を設定
  const ProfileCard = ({imageUrl = 'vite.svg', name, occupation, hobbies}: ProfileProps) => {

    return (
      <div className="card">
        <img src="vite.svg" alt="プロフィール画像" />
        <h2 className='title'>{name}</h2>
        <div>
          <p>職業: {occupation}</p>
          <p>趣味: {hobbies?.join(", ")}</p>
        </div>
        <p><button>Contact</button></p>
      </div>
    )
  }

  return (
    <>
      <ProfileCard 
        name="山田 太郎" 
        occupation="プロジェクトマネージャー" 
        hobbies={["プログラミング","読書"]}
      />
    </>
  )
}

export default App