import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import { Typography} from '@material-ui/core';
import Offers from './offers.js';
import  {filterPlan} from '../actions/action.js';
import {decidingPlan} from '../actions/action.js';
import { connect } from 'react-redux';
import { Redirect, Route,Switch,Link,withRouter } from 'react-router-dom'

const mapStateToProps=(state)=>{
  //console.log("APP map state to props", state);
  return {plan:state}
}
const mapDispatchToProps=(dispatch)=>{
return {findPlans : (payload) => dispatch(filterPlan(payload))
 // confirmPlan : (payload) => dispatch(decidingPlan(payload))
}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo:"",
      verify:true,
      navigate:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this); 
  }

  handleChange(event){
      this.setState({mobileNo:event.target.value});
      if(event.target.value.length===10){
        this.setState({verify:true});
        //this.props.findPlans(event.target.value);
      }
      else{
        this.setState({verify:false})
      }
      
  }

  handleClick(){
  //console.log(this.state.mobileNo)
  this.props.findPlans(this.state.mobileNo);
  this.setState({navigate:true});  
    //history.push("/plans");
  }

  render() {
    
    return (
      <div className="App">
          <TextField
            label="Mobile No"
            value={this.state.mobileNo}
            onChange={e=>this.handleChange(e)}
            margin="normal"
            variant="filled"
          /><br/>
          {this.state.verify===false && <Typography>Enter a valid mobile number</Typography>}
           <Button variant='text'  
            size="small" color="primary" 
            onClick = {this.handleClick}
             >
             <Link to = "/plans">

            browse plans
            </Link>
          </Button> 
         
         
    
      
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export const app1 = connect(mapStateToProps,mapDispatchToProps)(Offers);

