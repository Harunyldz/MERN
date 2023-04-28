import React, { Component } from "react";

export class StateSample extends Component {
  constructor(props) {
    super(props)

    /*Old way state define
    this.state = { name: "Tommy", age: 20, address: "Seoul" }; */

}


// new way state define
state = { name: "Tommy", age: 20, address: "Seoul" }

changeAge = () =>{
    var currentAge=this.state.age
    // console.log("Current Age: ", currentAge)
    this.setState({age:currentAge+1})
    // setTimeout(()=>{
    //     console.log("Next age: ", this.state.age)
    // },1000)
}

changeName=() =>{
    var randomNumber=Math.floor(Math.random()*150);
    this.setState({name:'Tommy Lee - '+randomNumber });
}

  render() {
    return (
      <div>
        StateSample
        <br />
        <div>Name: {this.state.name}</div>
        <br />
        <div>Age: {this.state.age}</div>
        <br />
        <div>Address: {this.state.address}</div>
        <br />
        <button onClick={this.changeAge}>Add Age</button>
        <br />
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default StateSample;
