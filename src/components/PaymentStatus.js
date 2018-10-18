import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Redirect, Route,Switch,Link,withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class PaymentStatus extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick()
  {
     this.props.history.push("/");
  }
  render(){
      return(
        <div>
        <Card className = "pay" >
            <CardContent >
                <Typography variant="headline"  className = "content">Payment Successfull</Typography>
                <Typography component="p"  className = "content"></Typography>
             </CardContent>
             <CardActions>
                 <Button size="small" color="primary" variant = "text" onClick = {this.handleClick}>
                  Recharge another number
                 </Button>
            </CardActions>
         </Card>
         </div>
      );
  }
}
export default withRouter(PaymentStatus);