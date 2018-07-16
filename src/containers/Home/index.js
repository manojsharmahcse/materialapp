import React, { Component } from 'react';
import Nav from '../../components/Nav'
import { Route, Switch,BrowserRouter,Redirect } from 'react-router-dom'

export default class App extends Component {

	render(){

		return (
				<div>
					<Nav />		
					<h3>Home Page</h3>			 
				</div>

			)
	}

}