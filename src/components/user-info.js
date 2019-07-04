'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo}></img>
    <div className='user-info-content'>
      <h1><a href={`https://github.com/${userinfo.login}`} target='_blank'>{userinfo.username}</a></h1>

      <ul className='respos-user-info'>
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  })
}

export default UserInfo
