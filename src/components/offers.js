import React, { Component } from 'react';
import {Checkout} from './Checkout.js';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import {decidingPlan} from '../actions/action.js'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
//import {app1} from './App.js';
import { Redirect, Route,Switch,Link,withRouter } from 'react-router-dom'

const mapStateToProps=(state)=>{
    return {primaryPlan:state.reducer1}
  }
  const mapDispatchToProps=(dispatch)=>{
  return {
    confirmPlan : (payload) => dispatch(decidingPlan(payload))
  }
  }

 class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedPlan:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }


    handleChange(booster,i)
    {
     this.setState({selectedPlan:i});
       this.props.confirmPlan(booster);
       //this.props.onReverse;
    }
    handleClick()
    {
     //this.setState({selectedPlan:i});
       //this.props.confirmPlan(booster);
       this.props.history.push("/");
    }

    render(){
        console.log("hiiii");
        console.log(this.props.primaryPlan);
        return( 

            <div className="App">
            {
           this.props.primaryPlan.plans.map((booster,i)=>{
              return(
             <div className = "planPackage">
               <Card className = "showPlans">
                   <CardContent >
                        <Typography variant="headline"  className = "content">{booster.planName}</Typography>
                        <Typography component="p"  className = "content">{booster.validity}</Typography>
                    </CardContent>
                    <CardActions>
                    <Checkbox
                            checked={this.state.selectedPlan===i&&true}
                            onChange={e=>this.handleChange(booster,i)}
                            value={i}
                            
                    />
                    {/*<Button size="small" color="primary" variant = "text" onClick = {e=>this.handle(booster)}>
                        Select
                        </Button>*/}
                    </CardActions>
                    </Card>
                <br/><br/>
                 
            </div>)
              })
            }
            <Button size="small" color="primary" variant = "text" onClick = {this.handleClick}>
            GoBack
           </Button>
           <Button size="small" color="primary" variant = "text" >
            <Link to ="/checkout">Checkout</Link>
            </Button>
           </div>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Offers));