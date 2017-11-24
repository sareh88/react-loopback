import React from 'react';
import Main from './component/Main';
import './App.css';
import Navbar from './component/Navbar';
import {Link} from 'react-router-dom';
const App = () =>(
  <div>
    <Navbar/>
    <div className='container'>
      <Main/>
    </div>
    <div className='fixed-action-btn'>
      <Link to='/meetup/add' className='btn-floating btn-large red'><i className='fa fa-plus'></i></Link>
    </div>
  </div>

 )

export default App;
 