'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({handleSearch, isDisabled}) => (
  <div className='search'>
      <input
        type='search'
        onKeyUp={handleSearch}
        disabled={isDisabled}
        placeholder='Digite o nome do usuário no GitHub' />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired 
}

export default Search
