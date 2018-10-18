import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class CheckoutOptions extends Component 
{
render() {
    return(
      <div className = "App">
            <RadioGroup name="card" value={this.props.cardType} onChange={this.props.handleChange} >
                    <FormControlLabel value="debit" control={<Radio color="primary" />} label="Debit Card" />
                    <FormControlLabel value="credit" control={<Radio color="primary" />} label="Credit Card" />
            </RadioGroup>
            <div className = "checkout">
                {this.props.cardType==="debit"?
                    <div >
                        <TextField
                            label="Card number"
                            margin="normal"
                            onChange = {this.props.handleDebitDetails}
                            id="cardNumber"
                            type="number"
                            error={this.props.debit.cardNumber.length===10?false:true}
                            
                        /><br/>

                        <TextField
                            id ="cardHolderName"
                            label="Card Holder Name"
                            margin="normal"
                            onChange = {this.props.handleDebitDetails}
                            error = {isNaN(this.props.debit.cardHolderName)?false:true}
                        />

                        <Typography>Expiry Date</Typography>

                        <TextField
                            id="expiryMonth"
                            label="month"
                            type="number"
                            onChange = {this.props.handleDebitDetails}
                            error = {this.props.debit.expiryMonth<=12?false:true}
                            placeholder = "For january enter 01"
                        /><br/>
                        <TextField
                            id="expiryYear"
                            label="year"
                            type="number"
                            onChange = {this.props.handleDebitDetails}
                            error = {this.props.debit.expiryYear.length===4&&this.props.debit.expiryYear>2018?false:true}
                            placeholder = "eg:2018"
                            /><br/>
                        <TextField
                        id="Cvv"
                            label="Cvv"
                            type="password"
                            margin="normal"
                            onChange = {this.props.handleDebitDetails}
                            error = {this.props.debit.cvv.length===3?false:true}
                        />
                    </div>
                    :
                    <div>
                       <TextField
                            id = "cardNumber"
                            label="Card number"
                            margin="normal"
                            onChange = {this.props.handleCreditDetails}
                            error={this.props.credit.cardNumber.length===10?false:true}
                            //helperText = "enter valid"
                         
                        /><br/>
                        <TextField
                            id = "cardHolderName"
                            label="Card Holder Name"
                            margin="normal"
                            onChange = {this.props.handleCreditDetails}
                            error = {isNaN(this.props.credit.cardHolderName)?false:true}
                        /><br/>

                        <Typography>Expiry Date</Typography>

                        <TextField
                            id="expiryMonth"
                            label="month"
                            type="number"
                            onChange = {this.props.handleCreditDetails}
                            placeholder = "For january enter 01"
                            error = {this.props.credit.expiryMonth<=12?false:true}
                        /><br/>
                        <TextField
                            id="expiryYear"
                            label="year"
                            type="number"
                            onChange = {this.props.handleCreditDetails}
                            placeholder = "eg:2018"
                            error = {this.props.credit.expiryYear.length===4&&this.props.credit.expiryYear>2018?false:true}
                            /><br/>
                        <TextField
                            id = "Cvv"
                            label="CVV/CVC"
                            type="password"
                            margin="normal"
                            onChange = {this.props.handleCreditDetails}
                            error = {this.props.credit.cvv.length===3?false:true}
                        />
                    </div>
                }
           
           <Button size="small" color="primary" variant="text" onClick={ this.props.handleClick}>
            <Link to="/paymentstatus" style={{ textDecoration: 'none' }}>
                 Proceed to Pay
            </Link>
            </Button>
            <br/>
            <Button size="small" color="primary" variant="text" onClick={ this.props.handleBackwardClick}>
                 Goback
            </Button>
        </div>
    </div>
    );
    }
}
export default CheckoutOptions;