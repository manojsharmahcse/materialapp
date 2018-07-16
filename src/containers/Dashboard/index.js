import React, { Component } from 'react';
import { Route, Switch,BrowserRouter,Redirect } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import DashboardNav from '../../components/DashboardNav';

export default class App extends Component {

	render(){

		return (
				<div>
					<DashboardNav />

					<h3>Welcome the Dashboard</h3>	  
					
				</div>

			)
	}

}