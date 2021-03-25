import React from "react";

const Header = (props) => {
  return <h1>{props.title}</h1>;
};
Header.defaultProps = {
  title: "Scores Table",
};

export default Header;
