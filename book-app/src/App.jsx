import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"

function App() {

  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/"  />
      </Routes>
    </div>
  )
}

export default App
