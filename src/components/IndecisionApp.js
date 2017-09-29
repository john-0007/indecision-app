import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
export default class IndecisionApp extends React.Component{
  state ={
    options: [],
    selectedOption: undefined
  }
  handleAddOption= option =>{
    if (!option){
      return "Enter a vaild value to add"
    }else if (this.state.options.indexOf(option) > -1){
      return "This option already exit"
    }
    this.setState(prevState => ({options: [...prevState.options,option]}))
  }
  handlePick=()=>{
    const randomNum=Math.floor(Math.random()* this.state.options.length)
    const option=this.state.options[randomNum]
    this.setState(()=>( 
      {selectedOption: option}))
  }
  handleRemoveAll=()=>{
    this.setState(()=> ({options: []}));
  } 
  handleDeleteOption=optionToRemove =>{
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  handleClearSelectedOption=()=>{
    this.setState(()=>({selectedOption: undefined}))
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

  render(){
    const subtitle="Put your life in the hand of computer!"
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
          <div className="widget">
            <Options 
            handleRemoveAll={this.handleRemoveAll}
            handleDeleteOption={this.handleDeleteOption}
            options={this.state.options}/>
            <AddOption handelAddOption={this.handleAddOption}/>
          </div>
        </div>
        <OptionModal 
        selectedOption={this.state.selectedOption}
        handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps={
  options: []
}
