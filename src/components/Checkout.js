import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Dialog } from '@material-ui/core';

export class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
         cardType:'debit'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({cardType:event.target.value});
    }
    render(){
        return(
            <div>
            <RadioGroup
            name="card"
            value={this.state.cardType}
            onChange={this.handleChange}
            >
            <FormControlLabel value="debit" control={<Radio color="primary" />} label="Debit Card" />
            <FormControlLabel value="credit" control={<Radio color="primary" />} label="Credit Card" />
            {/*this.state.cardType==="debit"?
            (<Dialog>

            </Dialog>

            ):( )*/}
            </RadioGroup>
            </div>
        );
    }
}

