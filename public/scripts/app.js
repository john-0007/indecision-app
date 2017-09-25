"use strict";

var visibility = false;
var onButtonToggle = function onButtonToggle() {
  visibility = !visibility;
  render();
};
var render = function render() {
  var visbility = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibity Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onButtonToggle },
      visibility ? "hide details" : "show details"
    ),
    visibility && React.createElement(
      "p",
      null,
      "hey, There are some details now you can see!"
    )
  );
  ReactDOM.render(visbility, document.getElementById("app"));
};

render();
