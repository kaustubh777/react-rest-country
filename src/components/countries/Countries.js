import React from "react";

import "./Countries.css";

// Component to display all the contries matching the name provided by user
function Countries(props) {
  return (
    <div>
      <div className="card" data-cy-country={props.data.name}>
        <img
          className="card-img-top"
          src={props.data.flags.svg}
          alt={props.data.flags.alt}
        />
        <hr />
        <div className="card-body">
          <h5 className="card-title">
            {props.data.name.length > 30
              ? props.data.name.substring(0, 27) + "..."
              : props.data.name}
          </h5>
          <p className="card-text">Capital : {props.data.capital}</p>
          <p className="card-text">Region : {props.data.region}</p>
        </div>
      </div>
    </div>
  );
}

export default Countries;
