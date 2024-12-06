import { Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Pages/Home"
import { Favorite } from "./Pages/Favorite"
import {Read} from './Pages/Read';
import { Profile } from "./Pages/Profile";

function App() {

  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
