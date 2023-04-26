import React, { Component } from "react";
import EventCompSub from "./EventCompSub";

export class EventComp extends Component {

  setNumber=(num) =>{
    console.log('App clicked from Eventcomp number is : ' + num);
    alert('App clicked from Eventcomp number is : ' + num);
  }

  clickHandler() {
    console.log("button clicked");
    alert("Button Clicked");
  }
  // testFromClassField="testFromClassField defined in EventComp";
  render() {
    // const testFromJSXField ="testFromJSXField defined in EventComp";
    return (
      <div style={{border:'1px solid red',padding:35}}>
        EventComp
        {/* <p>{this.testFromClassField}</p>
        <br/>
        <p>{testFromJSXField}</p> */}
        <br/>
        <button onClick={this.clickHandler}>Click(EventComp)</button>
        <EventCompSub age={21} setNumber={this.setNumber}/>
      </div>
    );
  }
}

export default EventComp;
