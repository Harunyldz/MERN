import React, { Component } from "react";

export class EventCompSub extends Component {
  clickHandler = () => {
    // console.log("EventCompSub clickHandler");
    // alert("EventCompSub clickHandler");
    this.props.setNumber('234 (fromEventCompSub)');
  };

  render() {
    console.log("EventCompSub props", this.props);

    return (
      <div style={{ border: "1px solid blue", padding: 15, margin: 10 }}>
        EventCompSub
        <hr />
        Age: {this.props.age}
        <br />
        <button onClick={this.clickHandler}>Click(EventCompSub)</button>
        {/* <button onClick={ this.props.setNumber(123)}>Click(EventCompSub)</button> */}
      </div>
    );
  }
}

export default EventCompSub;
