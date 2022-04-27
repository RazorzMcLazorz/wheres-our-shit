import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone'
import style from '../../../App.module.scss'

function NoAccess() {
  return (
    <div className={style.App}>
      <header className={style['App-header']}>
        <SentimentDissatisfiedTwoToneIcon />
        <p>Please access the app in Mobile mode in order to view</p>
      </header>
    </div>
  )
}

export default NoAccess
