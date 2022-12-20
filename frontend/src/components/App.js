import React, { Component } from 'react';
import '../styles/App.css';
import Dashboard from "./Dashboard";
// import getObject from "../helpers/fetch";



class App extends Component {
  
   //appel de toute la strcuture
  render = () => {
    
    return (
      <div className='main-app'>
        <Dashboard/>
      </div>
    )
  }
}


export default App;
