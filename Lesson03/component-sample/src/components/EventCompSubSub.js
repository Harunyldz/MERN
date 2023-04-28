import React, { Component } from "react";

export class EventCompSubSub extends Component {
  constructor(props) {
    super(props);
    console.log("EvenCompSubSub constructor parameters=>", props);
    this.clickHandler = this.props.setNumber.bind(this); //setnumber propsunu clickHandler ile bind etti
  }
  // fonk. ile bind etme yöntemi

  // clickHandler = () => {
  //     // console.log("EventCompSub clickHandler");
  //     // alert("EventCompSub clickHandler");
  //     this.props.setNumber('6489 (fromEventCompSubSub)');
  //   };

  render() {
    return (
      <div style={{ border: "1px solid yellow", padding: 10, margin: 10 }}>
        EventCompSubSub
        <br />
        <button onClick={this.clickHandler}>Click(EventCompSubSub)</button>

        {/* arrow fonk. ile data bind etme */}
        <button onClick={()=>this.props.setNumber(456)}>Click(EventCompSubSub)</button>
      </div>
    );
  }
}

export default EventCompSubSub;


//data bind yöntemleri
// 1-- Arrow function ile
// 2-- constructor ile
// 3-- function ile