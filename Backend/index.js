const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");

const createTables = require("./SQLUtilities/createTables");
createTables();


dotenv.config({ path: "config.env" });

const hosteliteRoutes = require("./Routes/hosteliteRoutes");
const loginRoutes = require("./Routes/loginRoutes");

app.use(express.json());
app.use(cors());
app.use("/api/hostelite", hosteliteRoutes); // Use correct variable name
app.use("/api/login", loginRoutes); // Use correct variable name


const connection = require('./Connections/connect.js');

app.listen(process.env.PORT, () => {
    console.log("Listening on: http://localhost:" + process.env.PORT);
});
