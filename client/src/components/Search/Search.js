import React from 'react';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upc: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
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
          onChange={this.handleInput}
          value={this.state.upc}
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Paper>
    )
  }
}

export default Search;