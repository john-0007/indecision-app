class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleRemoveAll=this.handleRemoveAll.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.state={
      options: props.options
    }
  }
  componentDidMount(){
    try {
      const json=localStorage.getItem("options");
      const options=JSON.parse(json);
      if(options){
        this.setState(() => ({options}))
      }
      
    } catch (error) {
      // do nothing at all
    }   
  }
  componentDidUpdate(prevState,prevProps){
    if (prevState.options.length !== this.state.options.length){
      const json=JSON.stringify(this.state.options);
      localStorage.setItem("options",json)
    }
  }
  handleAddOption(option){
    if (!option){
      return "Enter a vaild value to add"
    }else if (this.state.options.indexOf(option) > -1){
      return "This option already exit"
    }
    this.setState(prevState => ({options: [...prevState.options,option]}))
  }
  handlePick(){
    const option=Math.floor(Math.random()* this.state.options.length)
    alert(this.state.options[option])
  }
  handleRemoveAll(){
    this.setState(()=> ({options: []}))
  }
  handleDeleteOption(optionToRemove){
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  render(){
    const subtitle="Put your life in the hand of computer!"
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options 
          handleRemoveAll={this.handleRemoveAll}
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
        />
        <AddOption handelAddOption={this.handleAddOption}/>
      </div>
    );
  }
}
IndecisionApp.defaultProps={
  options: []
}
const Header= props =>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle&& <h2>{props.subtitle}</h2>}
    </div>
  );
}
Header.defaultProps={
  title: "Indecision"
}
const Action= props =>{
  return (
    <div>
      <button disabled={!props.hasOptions} 
      onClick={props.handlePick}>
      What should I do?
      </button>
    </div>
  );
}
const Options= props =>{
  return (
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
}
const Option= props=>{
  return (
    <div>
      {props.optionText}
      <button onClick={()=>{
        props.handleDeleteOption(props.optionText)
      }}>Remove</button>
    </div>
  );
}
class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handelAddOption=this.handelAddOption.bind(this)
    this.state= {
      error: undefined
    };
  }
  handelAddOption(event){
    event.preventDefault();
    const option=event.target.elements.option.value.trim();
    const error=this.props.handelAddOption(option)
    this.setState(()=> ({error}))
    if(!error){
      event.target.elements.option.value="";
    }
  }
  render(){
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
       <form onSubmit={this.handelAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
       </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />,document.getElementById("app"))