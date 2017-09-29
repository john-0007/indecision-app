import React from "react";
import Option from "./Option";
const Options= props =>(
    <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your option</h3>
      <button onClick={props.handleRemoveAll}
      className="button button--link">Remove All</button>
    </div>
      {props.options.length ===0 && <p className="widget__message">
        Please add a option to get start!
      </p>}
      {props.options.map((option,index)=> (
        <Option 
         handleDeleteOption={props.handleDeleteOption} 
         key={option} 
         count={index+1}
         optionText={option}
         />))}
    </div>
  );
export default Options;