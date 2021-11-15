const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://David:1234@cluster0.lsv20.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log('Mongo Db connected :' + conn.connection.host)
    } catch (error) { console.log('Mongo DB Error : ' + error) }
}


module.exports = connectDB;