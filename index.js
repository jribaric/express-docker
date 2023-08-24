const express = require('express');
app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',
    (req,res) => res.send('Dockerizing Node Application'));

app.get('/sweetpanini', (req,res) => {
    res.send('sweet panini');
})


app.listen(5000,
    () => console.log('⚡️⚡️⚡️⚡️Server running on port: ' + 5000));