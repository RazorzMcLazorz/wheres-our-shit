import { isMobile } from 'react-device-detect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoAccess from './components/noAccess/NoAccess'
import HomePage from './components/home/HomePage'

function App() {
  return isMobile ? (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <NoAccess />
  )
}

export default App
