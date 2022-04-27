import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { appBarRoutes } from './constants'

const AppBarRoutes = () => {
  return (
    <List style={{ width: '60vw' }}>
      {appBarRoutes.map(({ title, url }) => (
        <ListItem button key={url}>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  )
}

export default AppBarRoutes
