import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/Navbar';
import Home from './components/Home'

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <h1>Create and Send Newsletters</h1>
        <Route exact path='/' component={Home}/>
      </Router>
    )
  }
}

export default App;