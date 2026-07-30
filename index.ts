import express from "express";
import 'dotenv/config'

const app = express();

app.get("/", (req, res) => {
    res.json({
        environment: process.env.ENV_NAME,
        version: "5.0.0",
        message: `Hello from ${process.env.ENV_NAME}`,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
