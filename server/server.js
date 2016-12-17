const express               = require('express');
const bodyParser            = require('body-parser');
const config                = require(`${__dirname}/config/app`);
const MongoClient           = require('mongodb').MongoClient;
const app                   = express();

app.use(bodyParser.urlencoded({extended: true}))
var db

app.set('port', (process.env.PORT || 3000));

MongoClient.connect('mongodb://mongodb:27017', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(app.get('port'), '0.0.0.0', function(){
        console.log(`Listening to port ${app.get('port')}`);
    })
})

app.get('/', function(req, res){
    var cursor = db.collection('quotes').find().toArray(function(err, results){
        if (err) console.log(err)
        // console.log(results)
        res.render('index.ejs', {quotes: results})
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to db')
        res.redirect('/')
    })
})