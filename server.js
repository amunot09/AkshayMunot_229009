const express=require("express");
const app=express();
const path=require("path");

app.get("/",function(req,resp){
    resp.sendFile (path.join(__dirname,"/public/form.html"));
});
app.get("/welcome",function(req,resp){
    resp.sendFile (path.join(__dirname,"/public/welcome.html"));
});

app.listen(3000);
console.log("surver running at local host and port no:3000");