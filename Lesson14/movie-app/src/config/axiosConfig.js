import axios from 'axios';

const instance =axios.create({
    baseURL:'https://644cec0557f12a1d3dd399b5.mockapi.io/',
});

export default instance;


// axios.get('/movies')
// axios.post('/movies')
// axios.put('/movies')
// axios.delete('/movies')