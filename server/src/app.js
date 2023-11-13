const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const preventHibernation = require("./utils/cron");
const axios = require("axios");

const getCorsOrigins = () => {
    const origins = process.env.CORS_ORIGINS.split(";");
    return origins;
};

app.use(
    cors({
        origin: [
            "https://user-search-github.netlify.app",
            "https://ye-tambatra.github.io",
            "https://ye-tambatra.github.io/github-user-search",
            ...getCorsOrigins(),
        ],
    })
);

app.get("/", (req, res) => res.send("Server active"));

app.all("/api/*", async (req, res) => {
    try {
        const endpoint = req.params[0];
        const url = `https://api.github.com/${endpoint}`;
        const response = await axios({
            url: url,
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            method: req.method,
            data: req.body,
            params: req.query,
        });
        res.send(response.data);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server running");
    preventHibernation();
});
