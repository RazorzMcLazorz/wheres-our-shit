import { isMobile } from 'react-device-detect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppBar from './components/common/appBar/AppBar'
import NoAccess from './components/pages/noAccess/NoAccess'
import HomePage from './components/pages/home/HomePage'

function App() {
  return isMobile ? (
    <div>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <NoAccess />
  )
}

export default App
