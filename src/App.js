import "./App.css";
import Country from "./component/Country";
import Header from "./component/Header";
import allCountryScores from "./data/allCountryScores";
import Scores from "./component/Scores";
import React, { useState } from "react";
import AllScores from "./component/AllScores";

function App() {
  const sortCountries = allCountryScores.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  let allScores = [];
  for (let i = 0; i < allCountryScores.length; i++) {
    allScores = allScores.concat(allCountryScores[i].scores).sort((a, b) => {
      if (a.s < b.s) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  console.log(allScores);

  const [sort, setSort] = useState("descending");
  const clickHandler = () => {
    setSort((sort) => {
      if (sort === "descending") {
        return "ascending";
      } else {
        return "descending";
      }
    });
  };

  return (
    <div className="App">
      <Header title={"HIGH SCORES"} />
      <table>
        {allScores.map((country, index) => (
          <AllScores n={country.n} s={country.s} key={index} />
        ))}
      </table>
      <h4>Top Country Scores</h4>
      <button onClick={clickHandler}>Click to sort scores</button>

      {sortCountries.map((country, index) => (
        <div key={index}>
          <Country name={country.name} />
          <Scores country={country} sortOrder={sort} />
        </div>
      ))}
    </div>
  );
}

export default App;
