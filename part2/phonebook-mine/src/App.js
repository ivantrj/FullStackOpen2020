import React, { useState, useEffect } from "react";
import InputField from "./components/InputField";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(null);

  // Fetch person data from json-server
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);


  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
    const filtered = persons.filter((person) =>
      // Check if the search term is included in the names in the phonebook
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredPersons(filtered);
  };

  //submit form
  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    // check if the person si already in the phonebook
    const alreadyExists = persons.some((person) => person.name === newName);

    // do nothing
    if (newName === "") {
      return;
    }

    if (alreadyExists) {
      const person = persons.find((p) => p.name === newName);
      const changedPerson = { ...person, number: newNumber };
      const { id } = person;

      //error handling if the new number is too short


      //confirm update
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with the new one?`
      );

      if (confirmUpdate) {
        personService
          .update(id, changedPerson)
          .then((returnedPerson) => {
            //update number in state
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            );

            //notifications if the person is updated or removed from server


          })
      }
      //clear input fields
      setNewName("");
      setNewNumber("");
      return;
    }

    personService
      .create(newPerson)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));

        //notifications that the person is added

        //claer inputs
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        //notification message
      })
  };


  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete) {
      personService.deletePerson(id).then(() => {
        //Update state --> filter out deleted person
        const filteredPersons = persons.filter((person) => person.id !== id);
        setPersons(filteredPersons);

        // reset filter
        setFilter("");
      });
    }
  };




  return (
    <main className="container">
      <h2>Phonebook</h2>

      {/* notification */}
      <InputField
        label="Filter"
        htmlFor="filter"
        type="text"
        value={filter}
        onChange={handleFilter}
      />

      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        filteredPersons={filteredPersons}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default App;