const express = require("express");
const server = express();
server.use(express.static("public"));
server.use(express.urlencoded({extended:true}));

server.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/html" +  "/index.html");
});

server.get("/signIn", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/html" + "/signIn.html");
});
server.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/html" + "/register.html");
})
server.get("/home", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/html" + "/home.html");
})
server.get("/browse", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/html" + "/browse.html");
})

server.listen(3000, () => {
    console.log("connected to localhost:3000");
});