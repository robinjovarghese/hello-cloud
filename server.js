<<<<<<< HEAD
const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
=======
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello Azure 🚀</h1>
        <h2>Current Server Time</h2>
        <h3>${new Date()}</h3>
    `);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
>>>>>>> e9bffe2d900f8a70edd23b456be7c4710cc5de84
});