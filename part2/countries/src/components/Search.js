import React from 'react'

const Search = (props) => {
    return (
        <div>
            find countries<input
                type="text"
                onChange={e => props.setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search