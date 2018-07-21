import React, { Component } from 'react';
import { Route, Switch,BrowserRouter,Redirect,Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from './Home'
import About from './About'
import Contact from './Contact'


import blog from '../../assets/img/blog-1.jpg';

import DashboardNav from '../../components/DashboardNav';

export default class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			blogData : [
				{
					img: 'assets/img/blog-1.jpg',
					heading: 'How to Start an Online Business 101',
					text: 'Have you wanted to go into business for yourself for a long time? Have you hesitated because you didn`t want all the expense of renting an office store and stocking the shelves  Well, our modern technological age has the answer for you. This is the time to start your own business because now you can do it online with...',	
				},
				{
					img: 'assets/img/top-level-domains.jpg',
					heading: '6 Things To Keep In Mind When Choosing The Right Domain Name For Your Website',
					text: 'Settling on the right domain name can be difficult. Below you’ll find 6 things to keep in mind if you want to choose the perfect domain name for your website. Do you want a FREE website with your own domain name? Get started with SimpleSite now! 1. Keep it short When choosing a domain name for your website, shorter...',	
				},
				{
					img: 'assets/img/third.jpg',
					heading: 'How to Get Ideas for Blog Posts – No Matter What Your Niche Is',
					text: 'Do you sit in front of your computer with a blank page while you struggle to figure out what to write your next post about? You may have promised your readers to post new informative articles at a certain rate – maybe once or twice a week, for example. But it can take a lot of persistence to...',	
				},


			]
		}

	}

	render(){

		return (
				<div>		

				<DashboardNav />

				<div className="dash-container">

					 <Grid container spacing={40}>

					    <Grid item xs={8}> 
					    	<div className="left-sidebar">
						    	{this.state.blogData.map((item, key) => {
						    		return (
						    			<div className="itemscope" key={key}>
							    			<div className="img-cont">
							    				<img src={item.img} />
							    			</div>
							    			<div className="text-cont">
							    				<h2>{item.heading}</h2>
							    				<p>{item.text}</p>
							    				<a href="#" className="continue-btn"> CONTINUE READING </a>
							    			</div>
						    			</div>
						    			)
						    	  })}	
					    		</div>
					    </Grid>

					    <Grid item xs={4}>

					    	<div className="post-widget poster">
					    		<img src="./assets/img/create.png" />
					    	</div>
					   		
					   		<div className="post-widget">
					   			
					   			<h3 className="post-head">Popular Posts</h3>
					   			
					   			<div className="step-by">
					   				<img src={blog} width="60" height="60" />
					   				<h4>How to Start a Successful Blog [Tips & Tricks]</h4>
					   			</div>

					   			<div className="step-by">
					   				<img src={blog} width="60" height="60" />
					   				<h4>How to Start a Successful Blog [Tips & Tricks]</h4>
					   			</div>

					   			<div className="step-by">
					   				<img src={blog} width="60" height="60" />
					   				<h4>How to Start a Successful Blog [Tips & Tricks]</h4>
					   			</div>

					   			<div className="step-by">
					   				<img src={blog} width="60" height="60" />
					   				<h4>How to Start a Successful Blog [Tips & Tricks]</h4>
					   			</div>

					   		</div>

					    </Grid>

					 </Grid>

				</div>

				<Link to="/">Home</Link><br />
				<Link to="/about">About</Link><br />
				<Link to="/contact">Contact</Link>

				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />

			</div>

			)
	}

}