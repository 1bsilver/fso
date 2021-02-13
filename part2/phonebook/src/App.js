import React, { useState , useEffect} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const names = persons.map((person) => person.name);

  const addButton = (event) => {
    event.preventDefault();
    if (names.includes(newName)) {
      alert(`${newName} is already added to the phonebook`);
      // console.log('includes already')
    } else {
      const NameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(NameObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNewName = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const numbersToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );

  useEffect(()=> {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then(response=>{
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />

      <h3>Add a new</h3>

      <PersonForm
        addButton={addButton}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>
      <Person numbersToShow={numbersToShow} />
    </div>
  );
};

export default App;
