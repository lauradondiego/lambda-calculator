import React, {useState} from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import {numbers} from "../../../data"; //{numbers in curly brackets bc variable}



const Numbers = () => {
  console.log(numbers)
  // STEP 2 - add the imported data to state
  const [data, dataValue] = useState(numbers)//declare variables above return statement
  // const myData = data.map(x => x)
  // console.log("numbers data", myData)
  // console.log(data)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      }
      {data.map(y => (
      <NumberButton //component
      key= {y} // prop - use key bc react will cause errors it needs to grab a key
      myData={y} // creates 7 NumberButton components in a new array
      />))}
    </div>
  );
};

export default Numbers