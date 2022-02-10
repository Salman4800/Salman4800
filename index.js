const express =require('express')
const app = express()

app.get("/",function(req,res){
    console.log("Welcome");
})

app.get("/login",function(req,res){
    console.log("Welcome to login page");
})

app.get("/signup",function(req,res){
    console.log("Welcome to signup page");
})

app.listen(3000,function(){
    console.log("Server started on 3000");
})