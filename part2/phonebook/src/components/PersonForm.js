import React from 'react'

const PersonForm = ({addButton, newName, handleNewName, newNumber, handleNewNumber}) => {
    return (<div>
           <form onSubmit={addButton}>
          <div>
            name: <input value={newName} onChange={handleNewName} />
          </div>
          <div>
            number: <input type="number" value={newNumber} onChange={handleNewNumber}></input>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </div>)
  }

export default PersonForm