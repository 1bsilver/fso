import React, { useState } from "react";
import Detail from "./detail";
import EachCountry from './EachCountry'


const Filter = ({ allCountries, search }) => {

  if (search.length === 0) {
    return <div></div>;
  } 
  
  else if (allCountries.length > 10)
    return <div>Too many matches, Specify another filter!</div>;
 
    else if (allCountries.length === 0 && search.length > 0) {
    return <div>No matches found!</div>;
  } 
  
  else if (allCountries.length === 1) {
    return <Detail all={allCountries[0]} />;
  }
   else {
    return (
      <div>
        {allCountries.map((countries) => (
          <EachCountry countries={countries} key={countries.numericCode}/>
        ))}
      </div>
    );
  }
};

export default Filter;
