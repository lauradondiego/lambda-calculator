import React from "react";

const NumberButton = (props) => {
  console.log("numbers props", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className="numberButton" >{props.myData}</button>
    </>
  );
};

export default NumberButton