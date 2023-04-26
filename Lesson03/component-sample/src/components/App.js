import logo from "../logo.svg";
import "../App.css";
import BlogMain from "./BlogMain";
import React from "react";
import StyleSample from "./StyleSample";
import StyleSample02 from "./StyleSample02";
import EventComp from "./EventComp";

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       {/* <BlogMain/> */}
//       </header>
//     </div>
//   );
// }

// export default App;

// import => import a module from another file
// extends => extends a class from another class
// super() => calls the method property of the parent method

class App extends React.Component {
  constructor() {
    super();
    console.log("App constructor running");
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <EventComp/>
          {/* <StyleSample02/> */}
          {/* <StyleSample/> */}
          {/* <BlogMain/> */}
        </header>
      </div>
    );
  }
}

export default App;
