import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import { mockData } from './mockData'

function HomePage() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Stuff</TableCell>
            <TableCell align='right'>Has</TableCell>
            <TableCell align='right'>Owns</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row, idx) => (
            <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell component='th' scope='row' align='right'>
                {row.whoHas}
              </TableCell>
              <TableCell component='th' scope='row' align='right'>
                {row.whoOwns}
              </TableCell>
              <TableCell component='th' scope='row' align='right'>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}>
                  <PersonSearchIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default HomePage
