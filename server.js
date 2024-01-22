import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'

//config ENV
dotenv.config()

//rest object
const app = express();

//rest api
app.get('/', (req,res)=>{
    res.send("<h1>Hello Guys</h1>")
})


//port 
const PORT = process.env.PORT || 8080;

//Run Listen
app.listen(PORT, ()=>{
    console.log(`server runing on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})