const app={
  title: "Idecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};
const onFormSubmit=(event)=>{
  event.preventDefault();
  const option=event.target.elements.option.value;
  if (option){
    app.options.push(option);
    event.target.elements.option.value="";
    render();
  }
}
const onRemoveAll=()=>{
  app.options=[];
  render();

}
const onMakedecision=()=>{
  const randonNum=Math.floor(Math.random() * app.options.length)
  alert(app.options[randonNum]);
}
const render=()=>{const templete=(
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p> {app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <button disabled={app.options.length === 0} onClick={onMakedecision}>what should I do</button>
    <button onClick={onRemoveAll}>Remove All</button>
    <ol>
      {app.options.map(option => <li key={option}>{option}</li>
      )}
    </ol>
    
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
)

const appRoot=document.getElementById("app");
ReactDOM.render(templete, appRoot)}

render();