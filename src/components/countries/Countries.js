import React from "react";

import "./Countries.css";

function Countries(props) {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={props.data.flags.svg}
          alt={props.data.flags.alt}
        />
        <hr />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">Capital : {props.data.capital}</p>
          <p className="card-text">Region : {props.data.region}</p>
        </div>
      </div>
    </div>
  );
}

export default Countries;
