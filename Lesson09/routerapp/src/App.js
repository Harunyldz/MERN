import { Link, Route, Routes, useParams, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const lineSpace = <span style={{ padding: '0px 5px' }}>|</span>;
  const linkStyle = { color: 'red', textDecoration: 'none' }
  const linkActiveStyle = { color: 'grey', textDecoration: 'none', fontWeight: 'bold' }
  const isActiveControl =
    ({ isActive }) => {
      return isActive ? linkActiveStyle : linkStyle;
    }
  const userIds = [123, 456, 789]
  return (
    <div>
      <h3>ROUTER LESSON (APP Comp.)</h3>
      <Link to='/' style={linkStyle} >Home</Link>
      {lineSpace}
      {/* <Link to='About' style={linkStyle}>About</Link>
      {lineSpace} */}

      {/* aktif link için */}
      <NavLink to='About' style={isActiveControl}>About</NavLink>
      {lineSpace}

      <Link to='/Link01' style={linkStyle}>Link01</Link>
      {lineSpace}
      <Link to='/Link02' style={linkStyle}>Link02</Link>
      {lineSpace}
      <Link to={'/PersonalDetail/123'} style={linkStyle}>Get User 123</Link>
      {userIds && userIds.map((userId) => {
        return (
          <>
            <Link key={userId} to={'/PersonalDetail/' + userId}
              style={linkStyle}>Get User {userId}</Link>{lineSpace}
          </>
        )
      })}
      <hr />
      <Routes>
        {/* <Route path="/" element={<Home/>} />  anasayfa*/}
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Link01" element={<h1>LINK 01</h1>} />
        <Route path="Link02" element={<div><h2>LINK 02</h2> <p>YES!!</p></div>} />
        <Route path="/PersonalDetail/:userId" element={<PersonalDetail />} />
        <Route path="*" element={<h1>Upps... 404 Not Found!</h1>} />
        {/* hiçbir path ile eşleşmezsee * olan path gelir */}

      </Routes>

    </div>
  );
}

export default App;



function PersonalDetail() {
  //01. With window.location
  console.log("Windows.location: ", window.location);
  var personalId = window.location.pathname.split("/").pop();// pop() en son ki parçayı getirdi
  console.log("PATH NAME: ", personalId);

  //02. Alternative Way: !!!Only for Functional Components!!!
  const allParams = useParams();
  console.log("All Params: ", allParams)
  console.log("All Params: ", allParams.userId)
  const _personalId = allParams.userId;
  return (
    <div>
      <h2>Personal Detail</h2>
      <p>Personal ID: {personalId} from Windows Location</p>
      <p>Personal ID: {_personalId} from useParams() Method</p>
    </div>
  )
}
