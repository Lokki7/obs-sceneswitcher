const express = require('express');
const app = express();
const Obs = require('./obs');
const obs = new Obs();

const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//     extended: true
// }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.redirect('/public/index.html');
});

app.get('/scenes', (req, res) => {
    res.send(obs.getScenes());
});

app.post('/scene', (req, res) => {
    obs.setScene(req.body.scene);
    res.send({status: 'ok'});
});

app.listen(3000, () => {
    // console.log('Example app listening on port 3000!');
});
