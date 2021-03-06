import React from 'react'


const SingleEntry = ({person, handleButton}) => {
  const id =person.id
  const name = person.name
  return (<div>
    <li>{name} : {person.number} <button onClick={handleButton} name={name} value={id}>delete</button> </li> 
  </div>)
}
const Person = ({numbersToShow, handleClick}) => {
    return (<div>
       <ul>
       {numbersToShow.map(single => <SingleEntry key={single.id} person={single} handleButton={handleClick}/>)}
        </ul> 
    </div>)
  }


  export default Person