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

				<Grid container spacing={24}>
			        <Grid item xs={4}></Grid>
			        <Grid item xs={4}>
			        	<div className="form-widget">

			           		<h3 className="logo-sign"></h3>

			        	      <form className="formStyle">
								<Grid container spacing={24}> 
						    	   <Grid item xs={1}>					    	   			
										<i class="material-icons mrgin-20">
											account_box
										</i>
									</Grid>
						        		<Grid item xs={11}>									     	
									        <TextField
									          id="uncontrolled"
									          defaultValue="User Name"
									          type="text"
									          margin="normal"
									          className="width100 textField lightcolor"
									        />
								     </Grid>
								</Grid> 
								<Grid container spacing={24}> 
						    	   <Grid item xs={1}><i class="material-icons mrgin-20">email</i></Grid>
								   	 <Grid item xs={11}>
									         <TextField
									          id="uncontrolled"
									          defaultValue="Email Address"
									          type="email"
									          margin="normal"
									          className="width100 textField lightcolor"
									        />
							     	</Grid>
 								 </Grid>

 								 <Grid container spacing={24}> 
						    	   <Grid item xs={1}><i class="material-icons mrgin-20">lock</i></Grid>
								   	<Grid item xs={11}>								     
								         <TextField
									          id="uncontrolled"
									          defaultValue="password"
									          type="password"
									          margin="normal"
									          className="width100 textField lightcolor"
									    />							   
 									</Grid>
								 </Grid>

								  <Grid container spacing={24}> 
						    	   <Grid item xs={1}><i class="material-icons mrgin-20">lock</i></Grid>
								   	<Grid item xs={11}>								        
								         <TextField
									          id="uncontrolled"
									          defaultValue="password"
									          type="password"
									          margin="normal"
									          className="width100 textField lightcolor"
									    />	
								    </Grid>
								 </Grid>

						        <Button variant="contained" color="primary" className="button signbtn" onClick={this.onSubmit}>
							        Sign Up
							    </Button>

							     <a href="/Login" className="signup">Login</a>

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
)(Signup)

const mapDispatch = dispatch => {
	const allActionProps = Object.assign({}, dispatch)
	return allActionProps
}
