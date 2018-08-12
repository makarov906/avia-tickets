const express = require('express')
const tickets = require('./tickets')

const app = express()
const port = process.env.PORT || 5000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/tickets', (req, res) => {
    res.send(tickets)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
