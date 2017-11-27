//import React, { Component } from 'react';
//import axios from 'axios';
const API = 'http://localhost:3000/api/meetups';

export function getMeetUps(){
	let url = API
  return fetch(url)
   .then( res => res.json() )
    .catch(err => console.log(err) )

}
