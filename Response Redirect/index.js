
var express = require('express');
var app = express();

//Home
app.get("/", function (req, res) {
    res.send("Hello Express js"); // Send the response directly
});

//about
app.post("/about", function (req, res) {
   res.send("About Page"); // Send the response directly
  //res.json({message:"About Page"})
});

//Contact 
app.put("/contact", function (req, res) {
    res.send("Contact Page"); // Send the response directly
});

//Terms
app.delete("/terms", function (req, res) {
    res.send("Term page"); // Send the response directly
});

app.get("/Bangladesh", function (req, res) {
    res.redirect("http://localhost:7000/Japan"); 
});
app.get("/Japan", function (req, res) {
    res.send("This is Japan"); // Send the response directly
});

app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});
