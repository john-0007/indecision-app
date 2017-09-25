let visibility=false;
const onButtonToggle=()=>{
  visibility= !visibility;
  render();
}
const render=()=>{const visbility=(
  <div>
    <h1>Visibity Toggle</h1>
    <button onClick={onButtonToggle}>{visibility ? "hide details":"show details"}</button>
    {visibility && <p>hey, There are some details now you can see!</p>}
  </div>
)
ReactDOM.render(visbility,document.getElementById("app"))
}
render();