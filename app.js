const express = require('express');

const connectDB = require('./Configs/dataBase')
connectDB();

const app = express();

const PORT = 5000;
app.listen(PORT, () => {
    console.log('App listening on port : ' + PORT);
});


app.use(express.json());

//Route profil
const profil = require("./Routes/profil");
app.use('/profil', profil);


app.get('/', (req, res) => {
    res.send("Initial point");
});