'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content'

import ajax from '@fdaciuk/ajax'


class App extends Component {

  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch = (event) => {
    const user = event.target.value
    const keyCode = event.keyCode
    const enter = 13

    if (keyCode === enter) {
      ajax().get(`https://api.github.com/users/${user}`)
        .then((data) => {
          this.setState({
            userinfo: {
              following: data.following,
              followers: data.followers,
              login: data.login,
              photo: data.avatar_url,
              repos: data.public_repos,
              username: data.name
            },
            repos: [],
            starred: []
          })
        })
    }
  }

  getReposStarred = (type) => {
    return (event) => {
      event.preventDefault()

      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
        .then((data) => {
          this.setState({
            [type]: data
          })
        })
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={this.handleSearch}
      getRepos={this.getReposStarred('repos')}
      getStarred={this.getReposStarred('starred')}
    />
  }
}

export default App
