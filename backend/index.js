const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
const authRouter = require('./routes/authRouter.js')
const cors = require('cors')

dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to database");
    app.listen(process.env.PORT, (req, res)=>{
        console.log(`hosting at ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log(`Failed to connect`);
})

