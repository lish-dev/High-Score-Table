import React from "react";

const Scores = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.n}</td>
          <td>{props.s}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Scores;
