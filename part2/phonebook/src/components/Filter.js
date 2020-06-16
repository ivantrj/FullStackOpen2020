import React from 'react'


const Filter = ( props ) => {
  return (
    <div>
      filter shown with <input
        type="text"
        placeholder="Search"
        onChange={e => props.setSearch(e.target.value)}
      />
    </div>
  )
}

export default Filter