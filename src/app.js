'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {

  constructor() {
    super()
    this.state = {
      userinfo: {
        following: 300000,
        followers: 1000,
        login: 'marcuspereiradev',
        photo: 'https://avatars1.githubusercontent.com/u/30603440?v=4',
        repos: 100,
        username: 'Marcus Pereira'
      },
      repos: [],
      starred: []
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
