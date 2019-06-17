import React from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function Search(props) {
  return (
    <Paper className="search"
           elevation="3"
           component="div"
    >
      <TextField
        label="UPC"
        type="text"
        name="upc"
        margin="normal"
        variant="outlined"
        autoFocus={true}
        fullWidth={true}
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </Paper>
  )
}

export default Search;