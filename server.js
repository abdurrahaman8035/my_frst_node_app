const express = require("express");
const bodyParser = require("body-parser"); //import express
const app = express();
//create an express app
const user = {
    username : "abdurrahaman",
    password : "123"
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use req.body if you have used "post" or req.query if you are using "get" requests in your forms

app.post("/login", (req, res) => {
    if ( req.body.username === user.username && req.body.password === user.password )
    {
        res.send(`Hi ${req.body.username} your login details has been saved!...Your subject is ${req.body.subject}`);
        // res.send(`Username is ${req.body.username} and password is ${req.body.password}`);
    }
    else {
        res.send("password or username is incorrect please")
    }
}); //create a route

app.get("/", (req, res) => {
    res.send("Welcome to free money.com where you become rich overnigth!!!!")
});

app.get("/welcome", (req, res) => {
    res.send("Welcome to my application!")
}); //Visit http://localhost:3000/welcome

app.get("/goodbye/:name", (req, res) => {
    res.send(`Goodbye! ${req.params.name}`)
    console.log("That's my Guuuuyyyyyyyyyy!!!!")
});
app.get("/colors", (req, res) => {
    res.send(["green","blue","yellow","red"])
});

app.listen(3000, () => console.log("Server is running at port 3000")); //expose the app on port 3000