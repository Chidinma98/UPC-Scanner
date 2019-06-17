import React from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Search(props) {
  return (
    <div className = 'search'>
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
    </div>
  )
}

export default Search;