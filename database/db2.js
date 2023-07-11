import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection=()=>{
    const DBI_URI=`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-lma2drk-shard-00-00.ccet7je.mongodb.net:27017,ac-lma2drk-shard-00-01.ccet7je.mongodb.net:27017,ac-lma2drk-shard-00-02.ccet7je.mongodb.net:27017/?ssl=true&replicaSet=atlas-qhyqz8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        mongoose.connect(DBI_URI,{useNewUrlParser:true});
console.log("Successfully connected to the database");
    }
    catch(error){
console.log("Error",error.message);
    }
}
export default Connection;