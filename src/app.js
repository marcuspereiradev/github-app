'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

import ajax from '@fdaciuk/ajax'


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

  handleUsers = (event) => {
    const user = event.target.value
    const keyCode = event.keyCode
    const enter = 13

    if (keyCode === enter) {
      ajax().get(`https://api.github.com/users/${user}`)
        .then((data) => console.log(data))
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleUsers={this.handleUsers}
    />
  }
}

export default App
