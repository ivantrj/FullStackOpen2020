import React from 'react'

const Name = ({ person }) => {
    return (
      <div>
        <p>{person.name} {person.number}</p>
      </div>
      
    )
}

export default Name