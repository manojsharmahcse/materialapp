import React, { Component } from 'react';
import { Route, Switch,BrowserRouter,Redirect,Link } from 'react-router-dom'

import College from './College';
import Friends from './Friends';

export default class About extends Component {

	render(){

		return (

			<div>
				<h4>About us jiafchdkh</h4>
					<Switch>
						<Route exact path='/about/' component={Friends}/>
	   					<Route path='/about:number' component={College}/>
	   			</Switch>	
			</div>

			)

	}

}