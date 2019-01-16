import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    output: [
      {name: 'Asu'},
      {name: 'Braj'},
      {name: 'Chinu'},
    ]
  };
  nameChange1 = (event) => {
    this.setState({
      output: [
        {name: event.target.value},
        {name: 'Braj'},
        {name: 'Chinu'},
      ]
    })
  };
  nameChange2 = (event) => {
    this.setState({
      output: [
        {name: this.state.output[0].name},
        {name: event.target.value},
        {name: 'Chinu'},
      ]
    })
  };
  render() {
    const style = {
      color: "blue",
      width: "20%",
      marginLeft: "39%",
      border: "1px solid #cdcdcd",
      borderRadius: "5px",
      padding: "1%"
    }
    return (
      <div className="App">
        <h1 style={style}>Assignment 1</h1>
        <UserInput change1={this.nameChange1}
                   change2={this.nameChange2}
                   name1={this.state.output[0].name}
                   name2={this.state.output[1].name}/>
        <UserOutput name1={this.state.output[0].name}
                    change1={this.nameChange1}/>
        <UserOutput name2={this.state.output[1].name}
                    change2={this.nameChange2}/>
        <UserOutput name3={this.state.output[2].name}/>
      </div>
    );
  }
}

export default App;
