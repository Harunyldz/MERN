import React, { Component } from 'react'

export class FetchSample extends Component {

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
                this.setState({ loading: false })
            })
        // .then(()=>console.log("NEXT STATE:::: ",this.state.users))
    }

    render() {
        return (
            <div>
                <h2>
                    Fetching data from an API with <i>Fetch Method</i>
                </h2>
                {this.state.loading && <h2>Loading...</h2>}
                {this.state.error && <h2>{this.state.error}</h2>}
                <table>
                    {this.state.users && this.state.users.map((user) => {
                        return (
                            <tr key={user.id} >
                                <td style={{ border: '1px solid red' }}>{user.id}</td>
                                <td style={{ border: '1px solid red' }}>{user.name}</td>
                                <td style={{ border: '1px solid red' }}>{user.email}</td>
                                <td style={{ border: '1px solid red' }}>{user.phone}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}

export default FetchSample