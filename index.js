const express = require('express')
const path = require('path');
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');
const app=express();
const dbPath=path.join(__dirname,"goodreads.db");
let db=null;
const port=3000;
const connectDbAndCreateServer=async()=>{
    try{
        db= await open({
            filename:dbPath,
            driver:sqlite3.Database,
        });
        app.listen(port,()=>{
            console.log(`Server is Running Successfully in localsystem of port ${port}`);
        });
    }catch(e){
        console.log(`Database Error ${e.message}`);
    }finally{
        console.log("connectDbAndCreateServer() Function Execetued");
    }
}
connectDbAndCreateServer();

app.get("/",(request,response)=>{
    response.send("Connected to Sqlite Databse and Created Server Succesfully");
})