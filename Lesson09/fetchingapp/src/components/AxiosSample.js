import React, { Component } from 'react'
import axios from 'axios';

export class AxiosSample extends Component {

    state = { users: [], loading: true, error: null }


    componentDidMount() {

        this.setState({ loading: true })
        //Calling the API
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(jsdata=>{
            this.setState({ users: jsdata.data }) //jsdata.data diyerek datayı çekeriz
        })
        .catch(err => {
            this.setState({ error: err.message })
        })
        .finally(()=>{  //then ve catch durumlarının ikisinde de çalışacak kodları kapsar
            this.setState({ loading: false })
        })
    }


    render() {
        return (
            <div>
                <h2>
                    Fetching data from an API with <i>AXIOS Method</i>
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
        )
    }
}

export default AxiosSample