import React, { Component } from 'react'
import {Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

class AddItem extends Component {
  constructor(props){
    super(props)




    }


    render(){
        return(

            <div>
            <div><h2>Add an Item</h2></div>

            
            <TextField 
            id="outlined-with-placeholder"
            label="Brand"
            placeholder="Brand"
            variant="outlined"
            margin="normal"
            />

            <TextField 
            id="outlined-with-placeholder"
            label="Product Name"
            placeholder="Name"
            variant="outlined"
            margin="normal"
            />

            <TextField 
            id="outlined-with-placeholder"
            label="Product Description"
            placeholder="Product Description"
            variant="outlined"
            margin="normal"
            />

            <TextField 
            id="outlined-with-placeholder"
            label="Category"
            placeholder="Category"
            variant="outlined"
            margin="normal"
            />

            <div>
        <Button variant="contained" color="primary">
        Submit
        </Button>
            </div>


            </div>
        )


    }



}

export default AddItem 