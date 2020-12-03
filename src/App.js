import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/Navbar';
import Home from './components/Home'
import SettingsContainer from './containers/SettingsContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <h1>Create and Send Newsletters</h1>
        <Route exact path='/' component={Home}/>

        <Route exact path='/settings' component={SettingsContainer} />
      </Router>
    )
  }
}

export default App;