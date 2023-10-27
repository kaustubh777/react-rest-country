import React from "react";

function UserInput({ setCountryName, setInteracted, countryName }) {
  return (
    <form className="container">
      <label className="label" data-cy-searchtext="searchtext">
        Search the name of a country
      </label>
      <input
        data-cy-searchinput="searchinput"
        name="countryName"
        placeholder="Name of a country"
        value={countryName}
        className="form-control"
        onChange={(event) => {
          setCountryName(event.target.value);
          setInteracted(true);
        }}
      />
    </form>
  );
}

export default UserInput;
