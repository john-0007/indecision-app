import React from "react";
const Action= props =>(
    <div>
      <button disabled={!props.hasOptions}
      className="big-button"
      onClick={props.handlePick}>
      What should I do?
      </button>
    </div>
  );
export default Action;