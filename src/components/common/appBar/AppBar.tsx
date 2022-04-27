import { useState } from 'react'
import MUIAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import AppBarRoutes from './AppBarRoutes'

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MUIAppBar position='absolute' style={{ position: 'sticky', top: 0 }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Wheres Our Shit
          </Typography>
          <Button color='inherit'>Who Are You?</Button>
        </Toolbar>
      </MUIAppBar>
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        <AppBarRoutes />
      </Drawer>
    </>
  )
}

export default AppBar
