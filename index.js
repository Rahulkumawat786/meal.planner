// Starting point of our server
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import mealPlannerRoutes from './routers/router.js';
const app = express();

app.use(bodyParser.json({limit:"33mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"33mb",extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    console.log("Meal Planner Application");
    res.status(201).json({"message":"Meal Planner Application Started"});
});
app.use('/mealplanner',mealPlannerRoutes);

dotenv.config({path:"config.env"});
const PORT = process.env.PORT||8000;
const CONNECTION_URL = process.env.CONNECTION_URL;

//connect to database
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`));
}).catch((error)=>{
    console.log(error.message);
});