const {readdirSync}=require('fs');
const path =require('path');
const express =require('express');
const helmet = require('helmet');
const cors =require('cors');
const mongoose =require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const app =express();



app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());


readdirSync('./router').map(r => app.use("/api/v1" , require(`./router/${r}`)));


const port = process.env.PORT || 3000;

mongoose
.connect(process.env.DATABASE)
.then(()=>{
    app.listen(port,()=>{
        console.log(`server run successfully ${port}`);
    })
})
.catch((err)=>{
    console.log(err);
})