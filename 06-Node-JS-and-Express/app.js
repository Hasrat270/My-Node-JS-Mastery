const path = require("path");
const express = require("express");
const { request } = require("http");

const app = express();


app.get("/", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "index.html");
    response.send(htmlFilePath);
});

app.get("/restaurants", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
    response.sendFile(htmlFilePath);
})

app.get("/about", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "about.html");
    response.sendFile(htmlFilePath);
})

app.get("/recommend", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "recommend.html");
    response.sendFile(htmlFilePath);
})

app.get("/confirm", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "confirm.html");
    response.sendFile(htmlFilePath);
})



app.listen(3000, () => console.log("Server Listening on port 3000!"));