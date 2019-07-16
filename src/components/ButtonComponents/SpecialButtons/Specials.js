import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file
import {specials} from "../../../data"; //{specials in curly brackets bc variable}



const Specials = () => {
  console.log(specials)
  const [data, dataValue] = useState(specials)
  const myData = data.map(x => x)
  console.log("specials data", myData)

  // STEP 2 - add the imported data to state

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

{data.map(y => (
      <SpecialButton
      key= {y}
      myData={y}
      />))}
    </div>
  );
};

export default Specials