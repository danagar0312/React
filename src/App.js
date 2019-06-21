import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validator from './Validation/validation';
import Char from './Character/Char';

class App extends Component {
  state = {
    userInput:""
  }
  

  inputChangeHandler = (event) => {
    return this.setState({"userInput": event.target.value});
  }

  deleteTextHandler = (index) => {
    const inputEle = this.state.userInput.split('');
    inputEle.splice(index,1);
    const updatedText = inputEle.join('');
    this.setState({"userInput": updatedText});


  }


  render() {

    const characterList = this.state.userInput.split('').map((ch,index) => {
      return <Char 
              character={ch} 
              key={index} 
              click={() => 
                this.deleteTextHandler(index)}
              />
    }

    )
    return (
      <div className="App">
        <input type="text" 
        onChange={this.inputChangeHandler} 
        value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validator inputLength={this.state.userInput.length}></Validator>
        {characterList}
      </div>
    );
  }
}

export default App;
