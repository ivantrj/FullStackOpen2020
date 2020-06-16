import React from 'react'


const PersonForm = ( props ) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                name: <input
                    value={props.newPerson}
                    onChange={props.handleAddPerson} />
            </div>
            <div>
                number: <input
                    type="number"
                    value={props.newNumber}
                    onChange={props.handleAddNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm