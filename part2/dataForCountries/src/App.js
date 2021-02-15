import React, { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({test, search}) => {
  if(search.length===0)
  {return(<div></div>)}
  else if(test.length>10)
  return(<div>
    Too many matches, Specify another filter!
  </div>)
  else if (test.length===0 && search.length>0) {
    return(<div>No matches found!</div>)
  }
  else if (test.length===1) {
    
    return(<div>
        <h2>{test.map((note=>note.name))}</h2>
      <p>
        capital {test.map(country=>country.capital)} <br/>
        population {test.map(country=>country.population)}
      </p>
      <h3>languages</h3>
      <ul>
        {test[0].languages.map(lang=><li key={lang.iso639_1}>{lang.name}</li>)}
      </ul>
      <div><img src={test[0].flag} alt="Flag of the country" width="150" height="100"/></div>
    </div>)
  }
  else{
  return(<div>
    <ul>
    {test.map((note) => ( 
      <li key={note.numericCode}>{note.name}</li>
    ))}
  </ul>
  </div>) }}

const App = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  let countries2show=[]

  if (search==='')
  {console.log('type something')}
  else {countries2show=notes.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))}
    

  console.log("render", notes.length, "notes");

  return (
    <div>
      <div>
        find countries  
        <input value={search} onChange={handleSearch}/>
      </div>
      
      <Filter test={countries2show} search={search} />
    </div>
  );
};

export default App;
