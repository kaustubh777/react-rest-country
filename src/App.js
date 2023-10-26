import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Countries from "./components/countries/Countries";
import Country from "./components/country/Country";
import Loader from "./components/loader/Loader";

function App() {
  const [countryName, setCountryName] = useState("");
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const url = "getCountries/";

  async function fetchData() {
    setSelected([]);

    if (countryName.length > 0) {
      const response = await fetch(url + countryName);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setData([]);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [countryName]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <form className="container">
              <label className="label">Search the name of the country</label>
              <input
                name="countryName"
                placeholder="Name of the country"
                className="form-control"
                onChange={(event) => {
                  setCountryName(event.target.value);
                  setInteracted(true);
                }}
              />
            </form>
            <div className="row">
              {!isLoading &&
                data.length > 0 &&
                countryName.length > 0 &&
                selected.length === 0 &&
                data.map((element) => (
                  <Link
                    to="/country"
                    className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 link"
                    onClick={() => {
                      setSelected(element);
                    }}
                  >
                    <Countries data={element} />
                  </Link>
                ))}
            </div>

            <div>
              {isLoading && interacted && <Loader />}
              {!isLoading && data.length === 0 && interacted && (
                <p className="container">No countries with such name</p>
              )}
            </div>
          </Route>
          <Route path="/country">
            <Country country={selected} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
