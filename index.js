const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Ola mundo pelo express'))

app.listen(port, () => console.log('api rodando na porta 3000'))


