import Header from "./components/Header"
import Hero from "./components/Hero"
import Home from "./components/Home"
import { useState } from "react"

function App() {

  const [state, setState] = useState(() => {
    const savedUser = localStorage.getItem("username")
    return {
      username: savedUser
    }
  })

  const storeUser = (username) => {
    localStorage.setItem("username", username)
    setState({
      username: username
    })
  }

  const removeUser = () => {
    localStorage.removeItem("username")
    setState({
      username: ''
    })
  }

  return (
    <div className="container py-4">
      <Header username={state.username} logout={removeUser}/>
      {state.username ? <Home /> : <Hero storeUser={storeUser} />}
    </div>
  );
}

export default App;
