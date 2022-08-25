const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, 'scripts')));
app.use("/assets",express.static(path.join(__dirname,"assets")));
app.set("view engine","ejs");

app.get("/",(req, res)=>{
    res.render('index');
});
app.get("/about",(req, res)=>{
    res.render('about');
})

app.listen(3000,()=>{
    console.log("Server is running");
})