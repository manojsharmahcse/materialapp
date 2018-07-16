import React, { Component } from 'react';
import { Route, Switch,BrowserRouter,Redirect } from 'react-router-dom'
import Home from '../../containers/Home'
import Login from '../../containers/Login'
import Signup from '../../containers/Signup'
import Dashboard from '../../containers/Dashboard'


const checkAuth = () =>{
  const token = localStorage.getItem('token')
  console.log(token,33333)
  return !!token;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{ pathname: '/'}} />

    )
  )}/>
)

const PublicRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={props => {
    return checkAuth() ? (
      <Redirect to={{ pathname: `/dashboard` }} />
    ) :
      (
        <Component {...props} />
      )
  }} />
)

export default class App extends Component {

	render(){

		return (
				<div>
					<BrowserRouter>
						<Switch>							
							<PublicRoute exact path="/" component={Home} />
							<PublicRoute path="/Login" component={Login} />
							<PublicRoute path="/Signup" component={Signup} />
							<AuthRoute path="/Dashboard" component={props=><Dashboard {...props} />} />
						</Switch>
					</BrowserRouter>					 
				</div>

			)
	}

}