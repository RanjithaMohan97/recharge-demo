import React, { Component } from 'react';
import {Checkout} from './Checkout.js';
import Button from '@material-ui/core/Button';

import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import {decidingPlan} from '../actions/action.js'
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Route,Link } from 'react-router-dom'



/*const mapStateToProps=(state)=>{
    return {primaryPlan:state}
  }
  const mapDispatchToProps=(dispatch)=>{
  return {
      confirmPlan : (payload) => dispatch(decidingPlan(payload))
    }
  }*/

export class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
           checkout:false
        }
        this.handle = this.handle.bind(this)
    }


    handle(booster)
    {
        this.setState({checkout:true});
       this.props.confirmPlan(booster)
    }


    render(){

        console.log(this.props);
        //console.log("hiiii")
        return( 
            <div>
                
            {
            this.props.plan.plans[0].plans.map(booster=>{
              return(
             <div>
               <Card className = "showPlans">
                   <CardContent  className = "content">
                       
                        <Typography variant="headline"  className = "content">{booster.planName}</Typography>
                        <Typography component="p"  className = "content">{booster.validity}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" variant = "text" onClick = {e=>this.handle(booster)}>
                        Select
                    </Button>
                    </CardActions>
                    </Card>
                <br/><br/>
                
                {/*this.state.checkout&&
                <Route exact path ='/checkout' render={()=>
                (<Checkout/>)}
                />
                */}
            </div>)}
            )}
            {this.state.checkout&&<Checkout/>}
            </div>
        )
    }
}
//export default connect(mapStateToProps,mapDispatchToProps)(Offers);