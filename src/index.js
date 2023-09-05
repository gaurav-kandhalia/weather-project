const express = require('express')
const app = express();
const port = process.env.PORT || 5911;
const path = require('path');
const hbs = require('hbs')


const static_path = path.join(__dirname,'../public')

const template_path = path.join(__dirname,"../template/views")

const partial_path = path.join(__dirname,"../template/views/partials") 



app.set("view engine",'hbs');


app.set('views',template_path)

app.use(express.static(static_path))


// const view_path = path.join(__dirname,'../views')


hbs.registerPartials(partial_path)
app.get("/",(req,res)=>{
    res.render("index")
}) 

app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
        res.render("weather")
})
app.get("*",(req,res)=>{
    res.render('error')
    errorMsg:"Oops! Page not Found"
})
app.listen(port,()=>{
    console.log("server is listening at port no",port);
})