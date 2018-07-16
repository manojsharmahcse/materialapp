import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import login from '../../containers/Login'; 



export default class App extends Component {

	render(){	

		return (
				<div>
			      <AppBar position="static">
			        <Toolbar>
			          <IconButton color="inherit" aria-label="Menu">
			            <MenuIcon />
			          </IconButton>
			          <Typography variant="title" style={{ flex: 1 }} className="ButtonAppBar-flex-2" color="inherit">
			            <a href="/">Logo Here</a>
			          </Typography>
			          	<Button color="inherit" href="/login">Login</Button>
			          	<Button color="inherit" href="/Signup">Signup</Button>
			        </Toolbar>
			      </AppBar>
				</div>
			)
	}

}