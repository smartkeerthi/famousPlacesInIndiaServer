const express = require('express');
require('dotenv').config();
const connectDb = require('./db/connectDB');
const places = require('./Routes/places');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Famous Places In India');
})

app.use('/api/v1/places', places);

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URL);
        app.listen(PORT, console.log(`Server running on port ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start();