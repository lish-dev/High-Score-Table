import React from "react";

const Scores = (props) => {
  let scores;
  if (props.sortOrder === "ascending") {
    scores = props.country.scores.sort((a, b) => {
      if (a.s < b.s) {
        return -1;
      } else {
        return 1;
      }
    });
  } else {
    scores = props.country.scores.sort((a, b) => {
      if (a.s < b.s) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  return (
    <table className="App">
      <tbody>
        {scores.map((elem, index) => (
          <tr key={index}>
            <td>{elem.n}</td>
            <td>{elem.s}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Scores;
