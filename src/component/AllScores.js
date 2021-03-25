import React from "react";

const AllScores = (props) => {
    
  return (
    <tbody>
      <tr>
        <td>{props.n}</td>
        <td>{props.s}</td>
      </tr>
    </tbody>
  );
  
};

export default AllScores;
