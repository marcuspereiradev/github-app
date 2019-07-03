'use strict'

import React from 'react'

const Search = ({handleUsers}) => (
  <div className='search'>
      <input type='search' onKeyUp={handleUsers} placeholder='Digite o nome do usuário no GitHub' />
  </div>
)

export default Search
