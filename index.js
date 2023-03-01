const express = require('express')
const app = express()
const port = 3002
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });


  app.post('/login', (req, res) => {
    let email = req.body.email;
    let pwd = req.body.pwd;
    res.send(`Email: ${email} Password: ${pwd}`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
