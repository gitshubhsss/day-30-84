const express=require("express");
const app=express();
const port=8080;

const ExpressError=require("./ExpressError.js");



const checkToken=(req,res,next)=>{
    let{token}=req.query;
    if(token==="data"){
        next();
    }
    throw new ExpressError(401,"access denied");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("This token is working fine");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});

//this is the custom error that we have written;
//It is a custom error handleler
app.use((err,req,res,next)=>{
    let {status=500,message="something is wrong"}=err;
    res.status(status).send(message);
});







// app.use((req,res,next)=>{
//     res.send("page not found")
// })

app.listen(port,()=>{
    console.log("app is listening on the port 8080");
});