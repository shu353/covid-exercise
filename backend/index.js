const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const apiData = require("./services/apiData");

const v1 = express.Router();

app.use("/api/v1", v1);

v1.get("/apiData", apiData.getDetails);

app.listen(process.env.PORT, () => console.log("app is listening"));
