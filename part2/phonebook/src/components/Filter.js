import React from 'react'

const Filter = ({filter, handleFilter}) => {
  return (<div  className="filter">
    filter shown with
    <input value={filter} onChange={handleFilter}></input>
  </div>)
}
export default Filter