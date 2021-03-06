import React from "react";
import Weather from "./weather";

const Detail = ({ all }) => {
  return (
    <div>
      <h2>{all.name}</h2>
      <p>
        <b>capital:</b> {all.capital} <br />
        <b>population:</b> {all.population}
      </p>
      <h3>languages</h3>
      <ul>
        {all.languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <div>
        <img
          src={all.flag}
          alt="Flag of the country"
          width="150"
          height="100"
        />
      </div>
      <Weather capital={all.capital} />
    </div>
  );
};

export default Detail;
