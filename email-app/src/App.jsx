import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Inbox from './Pages/Inbox'
import Send from './Pages/Send'
import SingleEmailInbox from './Pages/SingleEmailInbox'
import SingleEmailSend from './Pages/SingleEmailSend'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/send' element={<Send/>}/>
        <Route path='/inbox/:emailId' element={<SingleEmailInbox/>}/>
        <Route path='/send/:sendId' element={<SingleEmailSend/>}/>
      </Routes>
    </div>

  )
}

export default App
