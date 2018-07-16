import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


export default class DashboradNav extends Component {

	logout = () => {
		localStorage.removeItem('token');
		window.location.assign('/')
	}

	render(){

		return (
			<div>
				 <AppBar position="static">
		        <Toolbar>
		          <IconButton color="inherit" aria-label="Menu">
		            <MenuIcon />
		          </IconButton>
		          <Typography variant="title" style={{ flex: 1 }} className="ButtonAppBar-flex-2" color="inherit">
		            Dashboard
		          </Typography>
		          	<Button color="inherit" onClick={this.logout}>Logout</Button>
		        </Toolbar>
		      </AppBar>	 
			</div>

			)
	}

}