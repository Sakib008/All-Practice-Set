import {  Route, Routes } from 'react-router-dom'
import './App.css'
import { Question } from './pages/Questions'
import { Home } from './pages/Home'
import { Answer } from './Components/Answer'

function App() {

  return (
   <div className="w-[calc(100%-32px)] h-[calc(100%-32px)] m-4 text-center bg-sky-400 rounded-xl">
   

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/question' element={<Question/>}/>
      <Route path='/question/:ans' element={<Answer/>}/>
    </Routes>
   </div>
  )
}

export default App
