const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('got a POST request'))
app.put('/', (req, res) => res.send('got a PUT request'))
app.delete('/', (req, res) => res.send('got a DELETE request'))


app.get('/con?t?act', (req, res) => res.send('got a GET request for /Contact'))//? opsiyonel karakter için
app.get('/a(bou)?t', (req, res) => res.send('got a GET request for /About'))

app.get('/messa*e', (req, res) => res.send('got a GET request for /Message'))//* yerine herhangi bir text ifade gelebilir.

app.get('/pro+file', (req, res) => res.send('got a GET request for /Profile'))// + kendinden önceki karakterin sayısını önemsemeden(en az bir tane) kabul eder

app.get('/who?is+i*t', (req, res) => res.send('got a GET request for /WhoIsIt'))


app.all('/secret', (req, res) => { res.send(`Got a ${req.method} request type foe /Secret`) })

app.get('/users/:userId', (req, res) => { res.send(`Got a GET request with parameters => ${req.params.userId} `) })
app.get('/users/:userId/books/:bookId', (req, res) => { res.send(`Got a GET request with parameters => ${req.params.userId} and ${req.params.bookId}`) })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))