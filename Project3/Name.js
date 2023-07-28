import React, {Component} from "react";
class Name extends React.Component{
  constructor(){
    super();
    this.state={
      data:
      [
        {
          "name":"Keertana:Babyma"
        },
        {
          "name":"Hari:Stickman"
        },
        {
          "name":"Pratyush:Badamcarrier"
        },
        {
            "name":"Vedaant:Curdbox"
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <Names/>
        <ul>
          {this.state.data.map((item) => <List data = {item}/>)}
        </ul>
      </div>
    );
  }
}
class Names extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome to the Buddy Club</h1>
        <h1>This is my friends.</h1>
      </div>
    );
  }
}
class List extends React.Component{
  render(){
    return(
      <ul>
        <li> {this.props.data.name}</li>
      </ul>
    );
  }
}
export default Name;
