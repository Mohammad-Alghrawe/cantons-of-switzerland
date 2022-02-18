import React, { useState, useEffect } from "react";
import Loading from "./components/loading/loading.js";
import Cantons from "./components/cantons/cantons.js";
import data from "./api/data.js";
import "./App.css";
// cantons data api.
const cantons_data = data;

function App() {
  //
  const [loading, setLoading] = useState(false);
  const [cantons, setCanton] = useState([]);

  const vistedCanton = (id) => {
    const newCantons = cantons.filter((canton) => canton.id !== id);
    setCanton(newCantons);
  };

  // fetching data from api. in case ex-api.
  /*const fetchCantons = async () => {
    setLoading(true);
    try {
    const response = await fetch(url);
    const cantons = await response.json();
    setLoading(false);
    setTours(cantons);
    } catch(error){
      setLoading(false);
      console.log(error);
    }
  };
  */
  // from local api
  const fetchCantons = () => {
    setLoading(true);
    setCanton(cantons_data);
    console.log(cantons_data);
  };
  useEffect(() => {
    document.title = "Switzerland";
    fetchCantons();
  }, []);
  // if we will use api here should be loading ((no !))
  if (!loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Cantons cantons={cantons} vistedCanton={vistedCanton} />
    </main>
  );
}

export default App;
