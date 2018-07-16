import React, { Component } from 'react';
import Nav from '../../components/Nav'
import { connect } from 'react-redux'
import { signupAction } from '../../actions/Auth'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../../App.css'

class Signup extends Component {

	constructor(props){
		super(props);

		this.state = {
			signin :{
				username: '',
				email : '',
				password : '',
				confirm_password: ''
			}

		}
	}


	onChange = (key, event) =>{
		console.log(key,event,777);
		const {signin} = this.state;
		signin[key] = event.target.value;
		this.setState({signin})

	}

	onSubmit = (e) =>{
		e.preventDefault();
		this.props.dispatch(signupAction(this.state.signin))
	}


	render(){

		return (

				<div className="container">
				<Nav />

				<Grid container spacing={24}>
			        <Grid item xs={4}></Grid>
			        <Grid item xs={4}>
			        	<form className="formStyle">

						     <TextField
						          id="name"
						          label="Name"
						          className="width100 textField"
						          margin="normal"
						           onChange={this.onChange.bind(this,'username')}
						        />

						      <TextField
						          id="name"
						          label="Email Address"
						           type="email"
						          className="width100 textField"
						          margin="normal"
						          onChange={this.onChange.bind(this,'email')}
						        />  

						      <TextField
						          id="password-input"
						          label="Password"
						          className="width100 textField"
						          type="password"
						          autoComplete="current-password"
						          margin="normal"
						          onChange={this.onChange.bind(this,'password')}
						        />

						        <TextField
						          id="password-input"
						          label="Confirm Password"
						          className="width100 textField"
						          type="password"
						          autoComplete="current-password"
						          margin="normal"
						          onChange={this.onChange.bind(this,'confirm_password')}
						        />

						        <Button variant="contained" color="primary" className="button" onClick={this.onSubmit}>
							        Sign in
							    </Button>

						    </form>   
			        </Grid>
			        <Grid item xs={4}></Grid>
			    </Grid>			
				 
			</div>

			)

	}

}

export default connect(
state => (
  {

  },
  mapDispatch
)
)(Signup)

const mapDispatch = dispatch => {
	const allActionProps = Object.assign({}, dispatch)
	return allActionProps
}
