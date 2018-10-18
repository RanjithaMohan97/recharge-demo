import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import {choosingCustomerPlan} from '../actions/action.js'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import {Link,withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        primaryPlan: state.reducer1
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        customerChoosenPlan: (payload) => dispatch(choosingCustomerPlan(payload))
    }
}

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlan: null

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
       /* if (localStorage.hasOwnProperty(this.props.primaryPlan.mobileNo)) {
            let value = JSON.parse(localStorage.getItem(key));
            let k= +key;
            this.setState()
          }*/
        //console.log(this.props.location.state);
        var selected = this.props.location.state;
        if (selected !== undefined) {
            this.setState({
                selectedPlan: selected.id
            });
        }
    }
    handleChange(booster) {
        this.setState({
            selectedPlan: booster.id
        });
        this.props.customerChoosenPlan(booster);
        localStorage.setItem(this.props.primaryPlan.mobileNo, JSON.stringify(booster));
    }
    handleClick() {
        this.props.history.push("/", this.props.primaryPlan.mobileNo);
    }

    render(){
        console.log(this.props.primaryPlan);
        return( 
            <div className="App">
             { this.props.primaryPlan.plans.map((booster,i)=>{ return(
                    <div className="planPackage">
                        <Card className = "cardDesign">
                            <div className="recharge_head">
                                <Typography variant="title">
                                    Recharge
                                </Typography>
                            </div>
                            <CardContent className="showPlans">
                                <Typography variant="title" className="content">{booster.planName}</Typography>
                                <Typography component="p" className="content">{booster.validity}</Typography>
                            </CardContent>
                            <CardActions>
                                <Checkbox checked={this.state.selectedPlan===booster.id && true} color ="primary" onChange={e=>this.handleChange(booster)} value={i} />
                            </CardActions>
                        </Card>
                        <br/>
                        <br/>

                    </div>
                )
              })
            }
           <div>
                <Button size="small" color="primary" variant="text" onClick={ this.handleClick}>
                    GoBack
                </Button>
                <Button size="small" color="primary" variant="text">
                    <Link to="/checkout" style={{ textDecoration: 'none' }}>Checkout</Link>
                </Button>
          </div>
        </div>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Offers));