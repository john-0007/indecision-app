import React from "react";
import Option from "./Option";
const Options= props =>(
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.length ===0 && <p>Please add a option to get start!</p>}
      {props.options.map(option => (
        <Option 
         handleDeleteOption={props.handleDeleteOption} 
         key={option} 
         optionText={option}
         />))}
    </div>
  );
export default Options;