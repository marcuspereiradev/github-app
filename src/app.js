'use strict'

import React from 'react'
import Search from './components/search'

const App = () => (
  <div className='app'>
    <Search />
    <div className='user-info'>
      <img src='https://avatars1.githubusercontent.com/u/30603440?v=4'></img>
      <h1><a href='https://github.com/marcuspereiradev' target='_blank'>Marcus Pereira</a></h1>

      <ul className='respos-info'>
        <li>Repositórios: 74</li>
        <li>Seguidores: 2</li>
        <li>Seguindo: 2</li>
      </ul>
    </div>

    <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

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
