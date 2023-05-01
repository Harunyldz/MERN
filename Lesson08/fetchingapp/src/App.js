import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export class App extends Component {

  state = { users: [], loading: true, error: null }

  componentDidMount() {
    this.setState({ loading: true })
    console.log("PREV STATE::::", this.state.users)
    console.log("API RUNNING")
    //Calling the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())   //gelen veriyi json formatına çevirdi
      //.then(jsdata => console.log("API Data :",jsdata)) json formatındaki datayı jsdata ya aktardı
      .then(jsdata => {
        this.setState({ users: jsdata })
        this.setState({ loading: false })
        return jsdata
      })
      //hata kontrolü
      .catch(err => {
        console.log("ERROR::::", err.message)
        this.setState({ error: err.message })
        this.setState({loading:false})
      })
    // .then(()=>console.log("NEXT STATE:::: ",this.state.users))
  }

  render() {
    const border = { border: '1px solid red' }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Fetching data from an API
          </p>
          {this.state.loading && <h2>Loading...</h2>}
          {this.state.error && <h2>{this.state.error}</h2>}
          <table>
            {this.state.users && this.state.users.map((user) => {
              return (
                <tr key={user.id} >
                  <td style={border}>{user.id}</td>
                  <td style={border}>{user.name}</td>
                  <td style={border}>{user.email}</td>
                  <td style={border}>{user.phone}</td>
                </tr>
              )
            })}
          </table>
        </header>
      </div>
    );
  }
}

export default App