import React, { Component } from 'react';
import {paymentMode} from '../actions/action.js'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import CheckoutOptions from './CheckoutOptions.js';

const mapStateToProps=(state)=>{
    return {primier:state.reducer1}
  }
  const mapDispatchToProps=(dispatch)=>{
  return {
    paymentDetails : (payload) =>{console.log(payload); dispatch(paymentMode(payload))}
  }
  }

 class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {

         cardType:'debit',

         debit:{
         cardNumber:"",
         cardHolderName:"",
         expiryMonth:"",
         expiryYear:"",
         cvv:""
         },

        credit:{
        cardNumber:"",
        cardHolderName:"",
        expiryMonth:"",
        expiryYear:"",
        cvv:""

         }

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDebitDetails = this.handleDebitDetails.bind(this);
        this.handleCreditDetails = this.handleCreditDetails.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBackwardClick = this.handleBackwardClick.bind(this);
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleChange(event){
        this.setState({cardType:event.target.value});
    }
    handleDebitDetails(event){
        switch(event.target.id){
        
                case "cardNumber":{
                    this.setState({ debit:{ ...this.state.debit,  cardNumber:event.target.value } });
                break;
                }
                case "cardHolderName":{
                    this.setState({debit:{ ...this.state.debit,cardHolderName:event.target.value}});  
                break;
                }
                case "expiryMonth":{
                    this.setState({debit:{ ...this.state.debit,expiryMonth:event.target.value}});
                break;
                }
                case "expiryYear":{
                    this.setState({debit:{ ...this.state.debit,expiryYear:event.target.value}});
                break;
                }
                case "Cvv":{
                    this.setState({debit:{ ...this.state.debit,cvv:event.target.value}});
                break;
                }
        }
        
    }
    
    handleCreditDetails(event){
        switch(event.target.id){
        
                case "cardNumber":{
                this.setState({credit:{ ...this.state.credit,cardNumber:event.target.value}});
                    break;
                }
                case "cardHolderName":{
                    this.setState({credit:{ ...this.state.credit,cardHolderName:event.target.value}});  
                break;
                }
                case "expiryMonth":{
                    this.setState({credit:{ ...this.state.credit,expiryMonth:event.target.value}});
                break;
                }
                case "expiryYear":{
                    this.setState({credit:{ ...this.state.credit,expiryYear:event.target.value}});
                break;
                }
                case "Cvv":{
                    this.setState({credit:{ ...this.state.credit,cvv:event.target.value}});
                break;
                }
        }
        
    }

    handleClick(){
        console.log(this.state);
        if(this.state.cardType==='debit')
        {
        this.props.paymentDetails(this.state.debit);
        }
        else{
        this.props.paymentDetails(this.state.credit);
        }
        
    }
    handleBackwardClick(){
        this.props.history.push("/plans",this.props.primier.choosenPlan);
    }
    render(){
        return(
        <CheckoutOptions {... this.state}
        handleChange={  this.handleChange}
        handleDebitDetails = {this.handleDebitDetails}
        handleCreditDetails = {this.handleCreditDetails}
        handleClick = {this.handleClick}
        handleBackwardClick = {this.handleBackwardClick}
        />
        );
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Checkout));










//href = "http://localhost:3000/paymentStatus"
/*handleCardHolderName(event){
     this.setState({debit:{ ...this.state.debit,cardHolderName:event.target.value}});
}
    handleExpiryMonth(event){
        this.setState({debit:{ ...this.state.debit,expiryMonth:event.target.value}});
    }
    handleExpiryYear(event){
        this.setState({debit:{ ...this.state.debit,expiryYear:event.target.value}});
    }
    handleCvv(event){
        this.setState({debit:{ ...this.state.debit,cvv:event.target.value}
       });
    }

*/
 // this.handleCardHolderName = this.handleCardHolderName.bind(this);
        //this.handleExpiryMonth = this.handleExpiryMonth.bind(this);
        //this.handleCardnumber = this.handleCardnumber.bind(this);
        //this.handleExpiryYear = this.handleExpiryYear.bind(this);
      //  this.handleCvv = this.handleCvv.bind(this);


        //handleCardHolderName = {this.handleCardHolderName}
       // handleExpiryMonth = {this.handleExpiryMonth}
       // handleCardnumber = {this.handleCardnumber}
       // handleExpiryYear = {this.handleExpiryYear}
        //handleCvv = {this.handleCvv}