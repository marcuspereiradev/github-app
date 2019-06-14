'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />

    

      <div className='repos'>
        <h2>Repositórios:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
  </div>
)

export default App
