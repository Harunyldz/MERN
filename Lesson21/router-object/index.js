const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))

const about=require('./routes/about')
app.use(about)
const contact=require('./routes/contact')
app.use('/api',contact)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))