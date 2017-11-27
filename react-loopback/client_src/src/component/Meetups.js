import React, { Component } from 'react';
import {getMeetUps} from './utils/Api'


export default class Meetups extends Component {
 constructor(){
 	super();
 	this.state = {
 		meetups:[]
 	 }

 }


componentDidMount(){
 	getMeetUps().then( res => {
 		//console.log(res)
 		let meetupsData = res;
   this.setState({
   	meetups: meetupsData
   })
   console.log(this.state)
 	})

}

	render() {
		return (
			<div>
				<h1>
					Meetups
				</h1>
			</div>
		);
	}


}
