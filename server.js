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
});