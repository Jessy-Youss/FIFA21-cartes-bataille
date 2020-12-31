const express = require('express')
var cors = require('cors')
const app = express()
const FindInCsv = require('find-in-csv');
const findInCsv = new FindInCsv('./fifa21/FUT21.csv');

app.listen(8080)
app.use(cors())


app.get('/getCard', (req, res) => {
    let idRandom;
    let cards = []
    for (let i = 0; i < 2; i++) {
        idRandom = Math.floor(Math.random() * 70)
        findInCsv.get(
            { id: idRandom },
            function (result) {
                cards.push(result)
            }
        );
    }
    res.send(cards)
})



