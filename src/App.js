import "./App.css";
import Country from "./component/Country";
import Header from "./component/Header";
import allCountryScores from "./data/allCountryScores";
import Scores from "./component/Scores";



function App() {
  const sortCountries = allCountryScores.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(sortCountries);

  return (
    <div className="App">
      <Header />
      <button>Click to sort scores</button>

      {sortCountries.map((country, index)=>( 
        <div key={index}>
          <Country name={country.name} />
          {country.scores.sort((a,b)=>{
            if (a.s< b.s){
              return 1;
            }else {
              return -1;
            }
          })
          .map((score, index)=>(
            <Scores n={score.n} s={score.s} key={index} />
          ))}
        </div>
      )
      
      )}
    </div>
  );
}

export default App;
