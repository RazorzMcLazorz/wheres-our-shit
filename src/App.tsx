import { isMobile } from 'react-device-detect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/style/app.scss'
import AppBar from './components/common/appBar/AppBar'
import NoAccess from './components/pages/noAccess/NoAccess'
import HomePage from './components/pages/home/HomePage'

function App() {
  return isMobile ? (
    <div className='appContainer'>
      <AppBar />
      <div className='routeContainer'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  ) : (
    <NoAccess />
  )
}

export default App
