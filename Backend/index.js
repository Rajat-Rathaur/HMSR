const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const createTables = require("./SQLUtilities/createTables");
const createConstraints = require("./SQLUtilities/constraints");

createTables();
createConstraints();


dotenv.config({ path: "config.env" });

const hosteliteRoutes = require("./Routes/hosteliteRoutes");
const loginRoutes = require("./Routes/loginRoutes");
const branchRoutes = require("./Routes/branchRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const servicesRoutes = require("./Routes/servicesRoutes");
const employeeRoutes = require("./Routes/employeeRoutes");


app.use(express.json());
app.use(cors());
app.use("/api/login", loginRoutes); 
app.use("/api/admin", adminRoutes); 
app.use("/api/branch", branchRoutes); 
app.use("/api/employee", employeeRoutes); 
app.use("/api/hostelite", hosteliteRoutes); 
app.use("/api/services", servicesRoutes); 


app.listen(process.env.PORT, () => {
    console.log("Listening on: http://localhost:" + process.env.PORT);
});
