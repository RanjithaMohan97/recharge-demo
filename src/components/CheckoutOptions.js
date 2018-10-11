import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Dialog, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect, Route,Switch,Link ,withRouter} from 'react-router-dom';

class CheckoutOptions extends Component 
{
render() {
    return(
        <div className = "App">
            <RadioGroup
            name="card"
            value={this.props.cardType}
            onChange={this.props.handleChange}
            >
            <FormControlLabel value="debit" control={<Radio color="primary" />} label="Debit Card" />
            <FormControlLabel value="credit" control={<Radio color="primary" />} label="Credit Card" />
                {this.props.cardType==="debit"?
                    <div>
                        <TextField
                            label="Card number"
                            margin="normal"
                            onChange = {this.props.handleDetails}
                            id="cardNumber"
                            type="number"
                            error={this.props.debit.cardNumber.length===10?false:true}
                            
                        /><br/>

                        <TextField
                            id ="cardHolderName"
                            label="Card Holder Name"
                            margin="normal"
                            onChange = {this.props.handleDetails}
                            error = {isNaN(this.props.debit.cardHolderName)?false:true}
                        />

                        <Typography>Expiry Date</Typography>

                        <TextField
                            id="expiryMonth"
                            label="month"
                            type="number"
                            onChange = {this.props.handleDetails}
                        /><br/>
                        <TextField
                            id="expiryYear"
                            label="year"
                            type="number"
                            onChange = {this.props.handleDetails}
                            /><br/>
                        <TextField
                            label="Cvv"
                            type="password"
                            margin="normal"
                            onChange = {this.props.handleDetails}
                        />
                    
                    </div>
                    :
                    <div>
                       <TextField
                            id = "cardNumber"
                            label="Card number"
                            margin="normal"
                            onChange = {this.props.handleCreditDetails}
                        /><br/>
                        <TextField
                            id = "cardHolderName"
                            label="Card Holder Name"
                            margin="normal"
                            onChange = {this.props.handleCreditDetails}
                        /><br/>

                        <Typography>Expiry Date</Typography>

                        <TextField
                            id="expiryMonth"
                            label="month"
                            type="number"
                            onChange = {this.props.handleCreditDetails}
                        /><br/>
                        <TextField
                            id="expiryYear"
                            label="year"
                            type="number"
                            onChange = {this.props.handleCreditDetails}
                            /><br/>
                        <TextField
                            id = "Cvv"
                            label="CVV/CVC"
                            type="password"
                            margin="normal"
                            onChange = {this.props.handleCreditDetails}
                        />
                    </div>
                }
            </RadioGroup>
            <Button size="small" color="primary" variant = "text" onClick = {this.props.handleClick} >

            <Link to ="/paymentstatus">
            Proceed to Pay
            </Link>
            
            </Button><br/>
            <Button size="small" color="primary" variant = "text" onClick = {this.props.handleBackwardClick} >
            Goback
            </Button>
</div>

 );
}
}
export default CheckoutOptions;