import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box, IconButton, TableHead, Tooltip, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';


export default class UserDisplay extends React.Component {
  render() {
    const {filteredData} = this.props;
    return (
      <TableContainer style={{margin: 'auto'}}>
        <Box border={1} borderRadius={16} borderColor="grey.300"  
          m="auto" mt = {2} bgcolor="white">
        <Table aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((result) => (
              <TableRow key={result.name}>
                <TableCell component="th" scope="row">
                  {result.name}
                </TableCell>
                <TableCell align="left">{result.email}</TableCell>
                <TableCell align="left">{result.phone}</TableCell>
                <TableCell align="left">{result.address.city}</TableCell>
                <TableCell padding="checkbox">
                  <Tooltip title="Delete">
                    <IconButton aria-label="Delete" onClick={() => this.props.deleteUser(result.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
      </TableContainer>
    );
  }
}
