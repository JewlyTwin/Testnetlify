import React, {Component} from 'react'
import Home from './components/ServiceList'
import Survey from './components/Survey'
import Happy from './components/Happy'
import Neutral from './components/Neutral'
import Bad from './components/Bad'
import Success from './components/Successful'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router className="App container">
        <Route exact path="/" component={Home} />
        <Route path="/survey" component={Survey} />
        <Route path="/happy" component={Happy} />
        <Route path="/neutral" component={Neutral} />
        <Route path="/bad" component={Bad} />
        <Route path="/success" component={Success}/>
      </Router>
    )
  }
}

export default App