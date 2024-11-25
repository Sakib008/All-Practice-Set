import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Inbox from './Pages/Inbox'
import Send from './Pages/Send'
import IndividualEmail from './Pages/IndividualEmail'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/send' element={<Send/>}/>
        <Route path='/mail/:mailId' element={<IndividualEmail/>}/>
      </Routes>
    </div>

  )
}

export default App
