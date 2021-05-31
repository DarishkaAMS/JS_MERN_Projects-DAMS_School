import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import studentRoutes from './routes/student.js';

const app = express(); 

app.use('/students', studentRoutes);
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://DarishkaAMS:F1_Junemoon_2013@cluster0.dwg55.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Connection is established and running on port: ${PORT}`)
)).catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);