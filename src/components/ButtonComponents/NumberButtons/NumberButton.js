import React from "react";

const NumberButton = props => {
  console.log("numbers props", props);
  return (
    <>
      {/* JSX(mix of HTML/JS) needs to be wrapped in <> */}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numberButton">{props.myData}</button>
    </>
  );
};

export default NumberButton;
