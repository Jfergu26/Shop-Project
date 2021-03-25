const express = require('express');
let cors = require('cors');


const app = express();
const port = 9000;

app.use(cors());
app.post('/Login', (req,res)=>{
    res.send(`Logged In Page....`)
})
app.get('/Login', (req,res)=>{
    res.send(`user not logged in`)
})
app.listen(port, () =>{
    console.log(`Listening at ${port}`)
})