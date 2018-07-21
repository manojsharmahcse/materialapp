import React, { Component } from 'react';
import { Route, Switch,BrowserRouter,Redirect,Link } from 'react-router-dom'

export default class School extends Component {
	constructor(props){
		super(props);
		this.state = {
			school : [
					{
						name : 'Manoj kumar',
						number : 1,					
					},
					{
						name : 'Deepak kumar',
						number : 2,					
					},
					{
						name : 'Rahul kumar',
						number : 3,					
					},
					{
						name : 'Sandy kumar',
						number : 4,					
					}
			]
		}
	}
	render(){
		return (
			<div>
				
				<ul>
					{this.state.school.map((item, key) => {
						return (
							<li key={key}>
								<Link to={`/about/${item.number}`}>{item.name}</Link>
							</li>
						)						
					})}
				</ul>
			</div>

			)
	}

}