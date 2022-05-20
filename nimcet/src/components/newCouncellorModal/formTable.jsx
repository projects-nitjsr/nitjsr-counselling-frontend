import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css';


export default function Content() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        
        <TableBody>
          
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="table-cell"> Full Name </TableCell>
              <TableCell className="table-cell">
                <div>
                  <select className="cell cell-option" name="title" id="title">
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                  </select>
                </div>
                
                <input className="cell cell-input" type="text"/>
              </TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="table-cell"> Email </TableCell>
              <TableCell  className="table-cell">
                <input className="cell cell-input" type="text"/>
              </TableCell>
              
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="table-cell"> Mobile </TableCell>
              <TableCell className="table-cell">
                <div>
                <select className="cell cell-option" name="TelCode" id="TelCode">
                  <option value="+91">+91</option>
                  <option value="+92">+92</option>
                </select>
                </div>
                
                <input className="cell cell-input" type="text"/>
              </TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
