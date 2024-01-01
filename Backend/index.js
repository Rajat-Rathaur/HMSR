const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const cors = require("cors");
const createTables = require("./SQLUtilities/createTables");
const createConstraints = require("./SQLUtilities/constraints");

const PORT = process.env.PORT || 4000;
const initializeDatabase = async () => {
    await createTables();
    await createConstraints();
};

initializeDatabase();

app.use(express.json());
app.use(cors());


const startRoutes = require("./Routes/startRoutes");
// const loginRoutes = require("./Routes/loginRoutes");
// const hosteliteRoutes = require("./Routes/hosteliteRoutes");
// const adminRoutes = require("./Routes/adminRoutes");
const branchRoutes = require("./Routes/branchRoutes");
const servicesRoutes = require("./Routes/servicesRoutes");
// const employeeRoutes = require("./Routes/employeeRoutes");
const feedsRoutes = require("./Routes/feedsRoutes");
const paymentRoutes = require("./Routes/paymentRoutes");

app.use("/", startRoutes);

// app.use("/api/login", loginRoutes);
// app.use("/api/admin", adminRoutes);
app.use("/api/branch", branchRoutes);
// app.use("/api/employee", employeeRoutes);
// app.use("/api/hostelite", hosteliteRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/feeds", feedsRoutes);
app.use("/api/payment", paymentRoutes);


app.listen(PORT, () => {
    console.log("Listening on: http://localhost:" + PORT);
});
