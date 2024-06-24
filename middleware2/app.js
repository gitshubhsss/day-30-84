const express=require("express");
const app=express();
const port=8080;

const ExpressError=require("./errorHandler.js");

app.listen(port,()=>{
    console.log("app is listening on the port 8080");
});;

app.use((err,req,res,next)=>{
    throw new ExpressError(501,"Error Occured");
})

app.get("/err",(req,res)=>{
    abcd=abcd;
});

//now will write a custom error handers
//so when this abcd not defined error occured 

app.use((err,req,res,next)=>{
    let {status=500,message}=err;
    res.status(status).send(message)
})

