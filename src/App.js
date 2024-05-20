import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ReactContext from './ReactContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    topic: 'Arts and Culture',
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {isRegistered, name, topic, showError} = this.state
    return (
      <ReactContext.Provider
        value={{
          isRegistered,
          name,
          topic,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" component={NotFound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
