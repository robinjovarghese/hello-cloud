const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Hello Azure</title>
    </head>

    <body style="font-family:Arial;text-align:center;margin-top:100px;">

        <h1>☁️ Hello Azure App Service!</h1>

        <h2>Deployment Successful 🚀</h2>

        <p>
            My name is Robin.
        </p>

        <p>
            This is my first Azure App Service deployment.
        </p>

        <h2>Current Server Time</h2>

        <h3>${new Date()}</h3>

    </body>
    </html>
    `);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});