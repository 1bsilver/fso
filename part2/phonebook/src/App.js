import React, { useState , useEffect} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import personServices from "./services/persons"
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notif, setNotif] = useState(null);
  const [col, setCol] = useState({});

  const names = persons.map((person) => person.name);
  const numbers = persons.map(person => person.number)

  const addButton = (event) => {
    event.preventDefault();
    if (names.includes(newName) && numbers.includes(newNumber)) {
      alert(`${newName} is already added to the phonebook`);
      // console.log('includes already') 
    }
    else if (names.includes(newName)) {
     if (window.confirm(`${newName} already exists. Would you like to update the number for it`)) {
       const person = persons.find(n => n.name === newName)
       const newObject = {
         ...person,
         number: newNumber
       };
        personServices
        .update(newObject,person.id)
        .then(returnedPerson => {
          // console.log(person.id)
          setPersons(persons.map(per => per.id !== Number(person.id) ? per : returnedPerson));
          setNewName("");
          setNewNumber("");
          setNotif(`Succesfully updated the number of ${returnedPerson.name}`)
          setCol({color:'green'})
          setTimeout(()=> {
            setNotif(null)
          },2000)
        })
        .catch(error => {
          console.log(error)
          setNotif(`Information of ${person.name} has already been removed from the server`)
          setCol({color:'red'})
          setTimeout(()=> {
            setNotif(null)
          },2000)
        })
      }
    }
    else {
      const NameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      personServices
      .create(NameObject)
      .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setNotif(`Succesfully added ${returnedPerson.name}`)
          setCol({color:'green'})
          setTimeout(()=> {
            setNotif(null)
          },2000)
        })
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

  const handleButton = (event) => {
    const id = event.target.value
    const name= event.target.name
    console.log(id)
    if(window.confirm(`Are you sure you want to delete ${name} from the record?`)) {
    personServices.remove(id)
    .then(test=> {
      setPersons(persons.filter(name=> name.id !== Number(id)))
    }) 
    .catch(error => {
      console.log(error)
      setNotif(`Information of ${name} has already been removed from the server`)
      setCol({color:'red'})
      setTimeout(()=> {
        setNotif(null)
      },2000)
    })
  }
  }
  
  useEffect(()=> {
    console.log('effect')
    personServices.getAll()
    .then(returnedData=>{
      console.log('promise fulfilled')
      setPersons(returnedData)
    })
  },[])



  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notification message={notif} col={col} />

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
      <Person numbersToShow={numbersToShow} handleClick={handleButton} />
    </div>
  );
};

export default App;
