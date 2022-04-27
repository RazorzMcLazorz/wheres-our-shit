import { createTheme } from '@mui/material/styles'
import { lightBlue, indigo } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string
      }
      secondary: {
        main: string
      }
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: lightBlue[500],
    },
  },
})

export default theme
