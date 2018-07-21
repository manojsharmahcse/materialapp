import React, { Component } from 'react';
import Nav from '../../components/Nav';
import { loginAction } from '../../actions/Auth';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import '../../App.css'

class Signin extends Component {

	constructor(props){
		super(props);
		this.state = {
			signin : {
				email : '',
				password : ''
			}
		}
	}

	onClick = () => {
		this.props.history.push(`/Signup`);
	}


	onChange = (key, event) =>{
		console.log(key,event,777);
		const {signin} = this.state;
		signin[key] = event.target.value;
		this.setState({signin})

	}


	onSubmit = (e) =>{
		e.preventDefault();
		this.props.dispatch(loginAction(this.state.signin)).then(res => {
			console.log(res,6666)
			if(res.data && res.data.token){
				this.props.history.push('/')
			}
		})

	}


	render(){

		return (

				<div className="container signbg">			

				<Grid container spacing={24}>
			        <Grid item xs={4}></Grid>
			        <Grid item xs={4}>
			           <div className="form-widget">

			           		<h3 className="logo-sign"></h3>

			        	 <form className="formStyle">

			        	 	<Grid container spacing={24}> 
						       <Grid item xs={1}>
						       		<i class="material-icons mrgin-20">email</i>
						       	</Grid>
						        <Grid item xs={11}>
							         <TextField
							          id="uncontrolled"
							          placeholder="Email Address"
							          type="email"
							          margin="normal"
							          name="email"
							          className="width100 textField lightcolor"
							          onChange={this.onChange.bind(this,'email')}
							        />
							     </Grid>
							  </Grid>
							    <Grid container spacing={24}> 
							  		<Grid item xs={1}><i class="material-icons mrgin-20">lock</i></Grid>
							  		  <Grid item xs={11}>
								        <TextField
								          id="uncontrolled"
								          placeholder="Password"
								           name="password"
								          type="Password"
								          margin="normal"
								          className="width100 textField lightcolor"
								          onChange={this.onChange.bind(this,'password')}
								        />
								       </Grid>
								</Grid>

						        <FormControlLabel
						          control={
						            <Checkbox
						              value="checkedB"
						              color="primary"
						              className="check-tick"
						            />
						          }
						          label="remember me"
						          className="check-color"
						        />

						        <Button variant="contained" 
						         onClick={this.onSubmit} 
						         color="primary" className="button signbtn">
							        Sign in
							    </Button>
							    <button type="button" onClick={this.onClick} className="signup">Register Now
							    </button>	
						    </form>   
						 </div>
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
)(Signin)

const mapDispatch = dispatch => {
	const allActionProps = Object.assign({}, dispatch)
	return allActionProps
}
