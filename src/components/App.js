import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import { Typography, Switch } from '@material-ui/core';
import { Offers} from '../components/offers';
//import ReactDOM from 'react-dom';
import  {filterPlan} from '../actions/action.js';
import {decidingPlan} from '../actions/action.js';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

const mapStateToProps=(state)=>{
  return {plan:state}
}
const mapDispatchToProps=(dispatch)=>{
return {findPlans : (payload) => dispatch(filterPlan(payload)),
  confirmPlan : (payload) => dispatch(decidingPlan(payload))
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
        this.setState({verify:true})
      }
      else{
        this.setState({verify:false})
      }
      
  }

  handleClick(){
  
  this.props.findPlans(this.state.mobileNo);
  this.setState({navigate:true});  
  //console.log(this.state.navigate);
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
            browse plans
          </Button> 
          {this.state.navigate&&<Offers {... this.props}/>
          }
          
       {/*this.state.navigate&&
       

          <Route
              exact path='/plans'
              render={({ history }) => (

                <Offers {... this.props}/> )
              }
               
          />  
            */ }
       
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
