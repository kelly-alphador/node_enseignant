const express=require('express');
// const morgan=require('morgan');
const mysql=require('mysql');
const myconnection=require('express-myconnection');

const app = express();
const bodyParser=require('body-parser');
const enseignantRoutes=require('../controller/route');
const cors = require('cors');
const port=3000;
const dbOptions={
    host: 'localhost',
    user: 'root',
    password: '',
    database:'enseignant'
};
app.use(cors());
app.use(bodyParser.json());
app.use(myconnection(mysql,dbOptions,'single'));
// app.use(morgan('dev'));
app.use((req,res,next)=>{
    console.log('requette effectue'+ Date().toString());
    next();
})
app.use(enseignantRoutes);


app.listen(port,()=>{
    console.log(`ecouter sur port ${port}`);
})
