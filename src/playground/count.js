class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleButtonAdd=this.handleButtonAdd.bind(this);
    this.handleButtonMinus=this.handleButtonMinus.bind(this);
    this.handleButtonReset=this.handleButtonReset.bind(this);
    this.state={
      count: 0
    }
  }
  componentDidMount(){

    if(isNaN){
      const count=parseInt(localStorage.getItem("count"))
      this.setState(()=>({ count}))
    }
 
  }
  componentDidUpdate(prevProps,prevState){
    if ( prevState.count  !== this.state.count){
      const count=this.state.count;
      localStorage.setItem("count",count)
    }
  }
  handleButtonAdd(){
    this.setState(prevState => ({count: prevState.count +1}))
  }
  handleButtonMinus(){
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  handleButtonReset(){
    this.setState(() => ({count: 0}))
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleButtonAdd}>+1</button>
        <button onClick={this.handleButtonMinus}>-1</button>
        <button onClick={this.handleButtonReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));