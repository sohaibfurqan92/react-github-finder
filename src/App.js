
import React, { Fragment,useState,useContext } from 'react'
import Navbar from './Components/Layout/Navbar'
import './App.css'
import Users from './Components/Users/Users'
import User from './Components/Users/User'
import Search from './Components/Users/Search'
import Alert from './Components/Layout/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './Components/Pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () =>{
const [alert,setAlert] = useState(null);

    return (
      <GithubState>
        <AlertState>
      <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
        {alert!==null ? <Alert/>:''} 
        <Alert/>
        <Switch>
          <Route exact path='/' render={props=>(
            <Fragment>
              <Search/>
      <Users/>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' component={User}/>
        </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
    );

}


export default App;
