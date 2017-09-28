class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.onButtonChange=this.onButtonChange.bind(this);
    this.state={
      visibility : false
    }
  }
  componentDidMount(){
    console.log("fetch");
  }
  onButtonChange(){
    this.setState((prevState)=>{
      return {
        visibility:  !prevState.visibility
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onButtonChange}>{this.state.visibility? "hide details" : "show details" }</button>
        {this.state.visibility && (<div>
          <p>Here we go</p>
          </div>)}
      </div>
    )
  }
} 

ReactDOM.render(<Visibility />, document.getElementById("app"))