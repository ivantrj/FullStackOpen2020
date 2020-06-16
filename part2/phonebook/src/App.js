import React, { useState } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const containsName = (arr, name) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return true;
      }
    }
    return false;
  }

const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1
    }


    if (containsName(persons, newPerson)) {
      alert(`${newPerson} is already in the phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewPerson('')
      setNewNumber('')
    }
  }

  const handleAddPerson = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const filteredNames = persons.filter(person => {
    return person.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter search={search} setSearch={setSearch}/>
      </div>
      <h2>Add a new</h2>
      <PersonForm addPerson={ addPerson } newPerson={ newPerson } handleAddPerson={handleAddPerson} newNumber={newNumber} handleAddNumber={handleAddNumber} />
      <h2>Numbers</h2>
      {filteredNames.map((person, number) =>
        <Name key={person.id} person={person} number={number} />
      )}
    </div>
  )
}

export default App
