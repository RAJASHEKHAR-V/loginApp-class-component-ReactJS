import {Component} from 'react'

import './index.css'

import LogInButton from '../Login'

import Message from '../Message'

import LogOutButton from '../Logout'

class Home extends Component {
  state = {status: 'Login', message: 'Please Login'}

  onLogInLogOut = () => {
    const {status} = this.state

    if (status === 'Login') {
      this.setState(() => ({status: 'Logout', message: 'Welcome User'}))
    } else {
      this.setState(() => ({status: 'Login', message: 'Please Login'}))
    }
  }

  render() {
    const {status, message} = this.state
    const event = this.onLogInLogOut

    return (
      <div className="bg-container">
        <div className="card">
          {message === 'Please Login' ? (
            <Message message={message} />
          ) : (
            <Message message={message} />
          )}
          {status === 'Login' ? (
            <LogInButton status={status} event={event} />
          ) : (
            <LogOutButton status={status} event={event} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
