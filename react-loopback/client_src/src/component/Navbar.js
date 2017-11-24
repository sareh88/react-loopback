import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="blue darken-3">
				    <div className="nav-wrapper">
				      <a href="/" className="brand-logo">Meetups</a>
				      <a  data-activates="main-menu" className="button-collapse show-on-large-smll"><i className="fa fa-bars"></i></a>
				      <ul className="right hide-on-small-only">
				        <li><Link to='/' ><i className="fa fa-users"></i> Meetups</Link></li>
				       
				      </ul>
				      <ul className="side-nav" id="main-menu">
				       <li><Link to='/' ><i className="fa fa-users"></i> Meetups</Link></li>
				       <li><Link to='/meetup/add' ><i className="fa fa-plus"></i>Add Meetups</Link></li>
				      </ul>
				    </div>
				  </nav>
			</div>
		);
	}
} 
