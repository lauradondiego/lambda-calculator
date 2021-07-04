import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data"; //{numbers in curly brackets bc variable}

const Operators = () => {
  console.log(operators);
  const [data, dataValue] = useState(operators);
  // const myData = data.map(x => x.char);
  // console.log("operators data", myData);

  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {data.map(a => (
        <OperatorButton
          key={a.char} //must pass in diff variables in each file
          myData={a.char}
        />
      ))}
    </div>
  );
};

export default Operators;
