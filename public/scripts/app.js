"use strict";

var app = {
  title: "Idecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};
var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    render();
  }
};
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};
var onMakedecision = function onMakedecision() {
  var randonNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randonNum]);
};
var render = function render() {
  var templete = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      " ",
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakedecision },
      "what should I do"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  var appRoot = document.getElementById("app");
  ReactDOM.render(templete, appRoot);
};

render();
