import React, { Component } from 'react'
import axios from 'axios';

export class AxiosSampleWithInstance extends Component {

    state = { users: [], loading: true, error: null }


    componentDidMount() {
        //Eğer birden fazla yerde aynı url den apiler çekilecekse instance kullanabiliriz.
        const instance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            timeout: 1000,
            headers: { 'X-Custom-Header': 'foobar' }
        });
        instance.get('users')
            .then(jsdata => {
                this.setState({ users: jsdata.data }) //jsdata.data diyerek datayı çekeriz
                console.log("Users::::", jsdata)
            })
            .catch(err => {
                this.setState({ error: err.message })
            })
            .finally(() => {  //then ve catch durumlarının ikisinde de çalışacak kodları kapsar
                this.setState({ loading: false })
            })
        instance.get('posts')
            .then(jsdata => {
                console.log("Posts::::", jsdata)
            })
            .catch(err => {
                this.setState({ error: err.message })
            })
            .finally(() => {  //then ve catch durumlarının ikisinde de çalışacak kodları kapsar
                this.setState({ loading: false })
            })
        instance.get('todos')
            .then(jsdata => {
                console.log("Todos::::", jsdata)
            })
            .catch(err => {
                this.setState({ error: err.message })
            })
            .finally(() => {  //then ve catch durumlarının ikisinde de çalışacak kodları kapsar
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

export default AxiosSampleWithInstance