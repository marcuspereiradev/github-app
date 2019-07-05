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
      starred: [],
      isFetching: false
    }
  }

  getGithubApiUrl = (username, type) => {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch = (event) => {
    const user = event.target.value
    const keyCode = event.keyCode
    const enter = 13

    if (keyCode === enter) {
      this.setState({ isFetching: true })

      ajax().get(this.getGithubApiUrl(user))
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
        .always(() => {
          this.setState({ isFetching: false })
        })
    }
  }

  getReposStarred = (type) => {
    return () => {
      const username = this.state.userinfo.login

      ajax().get(this.getGithubApiUrl(username, type))
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
      isFetching={this.state.isFetching}
      handleSearch={this.handleSearch}
      getRepos={this.getReposStarred('repos')}
      getStarred={this.getReposStarred('starred')}
    />
  }
}

export default App
