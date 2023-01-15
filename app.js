import express, { urlencoded } from'express';
import bodyParser from "body-parser";
import connectDB from './db/connectdb.js';
import {join} from 'path';
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

//Database Connection
connectDB(DATABASE_URL);

app.use(bodyParser.urlencoded({ extended: true }));
//static files
app.use('/student',express.static(join(process.cwd(),"public")));
app.use('/student/edit',express.static(join(process.cwd(),"public")));

//set template Engine
app.set("view engine","ejs");
//load routes 
app.use("/student",web);

app.listen(port,()=>{
          console.log(`Servers listening at http://localhost:${port}`);
})