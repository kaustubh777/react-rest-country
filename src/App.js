import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import Header from "./components/header/Header";
import Countries from "./components/countries/Countries";
import Loader from "./components/loader/Loader";
import fetchDataService from "./components/services/fetchDataService";
import UserInput from "./components/userInput/UserInput";

function App() {
  const [countryName, setCountryName] = useState(""); // state for my userInput
  const [selected, setSelected] = useState([]); // if user has selected a country
  const [data, setData] = useState([]); // set data fetched in the API
  const [isLoading, setLoading] = useState(false); // loading indicator
  const [interacted, setInteracted] = useState(false); // user has interacted with the app
  const Country = lazy(() => import("./components/country/Country")); // load the individual country only when the URL is accessed

  const url = "getCountries/";
  let whenNoData;

  const fetchData = fetchDataService;

  // using debouncing for ensuring minimum api calls to backend
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchData(countryName, url, setSelected, setData, setLoading);
    }, 500);
    return () => clearTimeout(timer);
  }, [countryName]);

  // content to be displayed while loading or if data is absent
  if (isLoading && interacted) {
    whenNoData = <Loader />;
  } else if (!isLoading && data.length === 0 && interacted) {
    whenNoData = <p className="container">No countries with such name</p>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* Header component */}
          <Header />
          {/* Search component for user input */}
          <UserInput
            setCountryName={setCountryName}
            setInteracted={setInteracted}
            countryName={countryName}
          />
          {/* Display logic for manipulating DOM for the data received */}
          <div className="row">
            {!isLoading &&
              countryName.length > 0 &&
              data.map((element) => (
                <Link
                  to="/country"
                  className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 link"
                  onClick={() => {
                    setSelected(element);
                  }}
                >
                  <Countries key={element.id} data={element} />
                </Link>
              ))}
          </div>
          <div daya-cy-nodata="nodata">{whenNoData}</div>
        </Route>
        <Route path="/country">
          {/* Logic for lazy loading the country component */}
          <Suspense fallback={<div>.</div>}>
            <Country country={selected} />
          </Suspense>
        </Route>
        {/* Handling wild card routes a quick alternate to making a 404 Componenet and Error Boundary Handling*/}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
