import React, { Component } from 'react'
import {Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'

class AddItem extends Component {
  constructor(props){
    super(props)




    }


    render(){
        return(
            <div>
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

            </div>
        )


    }



}

export default AddItem 