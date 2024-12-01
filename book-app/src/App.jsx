import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Pages/Home"

function App() {

  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
