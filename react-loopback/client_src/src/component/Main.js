import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import About from './About';
import Meetups from './Meetups';


export default class Main extends Component {
	render() {
		return (
		  <main>
       <Switch>
         <Route exact path='/' component={Meetups}/>
         <Route exact path='/about' component={About}/>

       </Switch>
		  </main>
			
		);
	}
} 
 