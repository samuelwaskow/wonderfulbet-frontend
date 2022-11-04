import Header from "./components/Header"
import Hero from "./components/Hero"
import Home from "./components/loggedin/Home"
import { useState } from "react"

function App() {

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username")
  })

  const storeUser = (username) => {
    localStorage.setItem("username", username)
    setUsername(username)
  }

  const removeUser = () => {
    localStorage.removeItem("username")
    setUsername('')
  }

  return (
    <div className="container py-4">
      <Header username={username} logout={removeUser}/>
      {username ? <Home /> : <Hero storeUser={storeUser} />}
    </div>
  );
}

export default App;
