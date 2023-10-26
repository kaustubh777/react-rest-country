import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Country.css";

function Country(props) {
  const history = useHistory();
  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    if (props.country.length === 0) {
      history.push("/");
    } else {
      setLoadPage(true);
    }
  }, []);

  if (loadPage) {
    function currencyHandler(curObj) {
      let str = "";
      for (let key in curObj) {
        str = str + curObj[key].name + ", ";
      }
      return str;
    }
    return (
      <div className="row country">
        <div className="col-xs-12 col sm-12 col-md-4 col-lg-4 col-xl-4">
          <img className="flag" src={props.country.flags.svg} />
        </div>

        <div className="col-xs-12 col sm-12 col-md-6 details">
          <p>Name : {props.country?.name}</p>
          <p>Capital : {props.country?.capital}</p>
          <p>Region : {props.country?.region}</p>
          <p>Population : {props.country?.population}</p>
          <p>Currencies : {currencyHandler(props.country?.currencies)}</p>
          <p>Borders : {props.country?.borders?.join()}</p>
          <p>Area sq km : {props.country?.area}</p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Country;
