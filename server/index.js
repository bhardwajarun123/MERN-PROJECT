import express from "express";

import connection from "./database/db.js";
import dotenv from "dotenv";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config() // initializing dotenv

const app = express()

app.use(cors()); // by using this cors problem solved
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', Router)

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server is running successfullyon PORT ${PORT}`)
})

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);