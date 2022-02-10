const express =require('express')
const app = express()

app.get("/",function(req,res){
    res.write("Welcome")
    res.end()
})

app.get("/login",function(req,res){
    res.write("Welcome to login page")
    res.end()
})

app.get("/signup",function(req,res){
    res.write("Welcome to signup page")
    res.end()
})

app.listen(3000,function(){
    console.log("Server started on 3000");
})