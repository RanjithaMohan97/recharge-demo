import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import { Typography} from '@material-ui/core';
import  {filterCustomerPlan} from '../actions/action.js';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
      plan: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      availablePlansForCustomer: (payload) => dispatch(filterCustomerPlan(payload))
  }
}

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          mobileNo: "",
          verify: true,
          navigate: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
      console.log(this.props.location.state);
      var selected = this.props.location.state;
      this.setState({
          mobileNo: selected
      });
  }

  handleChange(event) {
      this.setState({
          mobileNo: event.target.value
      });
      if (event.target.value.length === 10) {
          this.setState({
              verify: true
          });
      } else {
          this.setState({
              verify: false
          })
      }

  }

  handleClick() {
      this.props.availablePlansForCustomer(this.state.mobileNo);
      this.setState({
          navigate: true
      });
  }
  render() {
    
    return (
      <div className="App">
          <TextField label="Mobile No" value={this.state.mobileNo} 
                    onChange={e=>this.handleChange(e)} 
                    margin="normal" variant="filled" 
                    /><br/>
            {this.state.verify===false &&
              <Typography>Enter a valid mobile number</Typography>}
              <Button variant='text' size="small" color="primary" onClick={ this.handleClick}>
                  <Link to="/plans" style={{ textDecoration: 'none' }}>
                     browse plans
                  </Link>
              </Button>
       </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));


