import React, { Component } from 'react'
import {Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import './AddUpdate.css'

class AddItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "add-update-product">
                <Paper
                    className = "paper"
                    component = "div"
                    elevation = "3"
                >
                <div><h2>Add an Item</h2></div>

                <TextField 
                    className="outlined-with-placeholder"
                    label="Brand"
                    placeholder="Brand"
                    variant="outlined"
                    margin="normal"
                />

                <TextField 
                    className="outlined-with-placeholder"
                    label="Product Name"
                    placeholder="Name"
                    variant="outlined"
                    margin="normal"
                />

                <TextField 
                    className="outlined-with-placeholder"
                    label="Product Description"
                    placeholder="Product Description"
                    variant="outlined"
                    margin="normal"
                />

                <TextField 
                    className="outlined-with-placeholder"
                    label="Category"
                    placeholder="Category"
                    variant="outlined"
                    margin="normal"
                />
                
                <div>
                    <Button 
                        className = "submit-button"
                        variant="contained" 
                        color="primary"
                    >
                    Submit
                    </Button>
                </div>

                </Paper>
            </div>
        )
    }
}

export default AddItem 