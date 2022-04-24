import { isMobile } from 'react-device-detect'
import NoAccess from './components/noAccess/NoAccess'
import logo from './logo.svg'
import style from './App.module.scss'

function App() {
  return isMobile ? (
    <div className={style.App}>
      <header className={style['App-header']}>
        <img src={logo} className={style['App-logo']} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={style['App-link']}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  ) : (
    <NoAccess />
  )
}

export default App
