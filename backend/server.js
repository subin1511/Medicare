const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Changed from bodyparser to bodyParser
const app = express();
// require("dotenv").config();

const port = 8080;
const dbconnection = require("./utilis/db.js");

const userroutes = require("./routes/userRoutes.js");
const profileroutes = require("./routes/profileRoutes.js");
const prescriptionroutes = require("./routes/prescriptionRoutes.js");
const doctorroutes = require("./routes/doctorRoutes.js");
const medicroutes = require("./routes/medicRoutes.js");
const dashboardroutes = require("./routes/DashboardRoutes.js");
const patientroutes = require("./routes/patientRoutes.js");
const AppointmentRoute = require("./routes/AppointmentRoute.js");
const InvoiceRoute = require("./routes/InvoiceRoute.js");
const iotCrud = require("./routes/iotCrud.js");



app.use(bodyParser.json()); // Use bodyParser.json() for JSON parsing
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userroutes);
app.use("/api", profileroutes);
app.use("/api", doctorroutes);
app.use("/api", prescriptionroutes);
app.use("/api", medicroutes);
app.use("/api", dashboardroutes);
app.use("/api", patientroutes);
app.use("/api", AppointmentRoute);
app.use("/api", InvoiceRoute);
app.use("/api", iotCrud);


app.use("/api/paypal", require("./routes/api/paypal.js"));

dbconnection;

app.listen(port, () => {
  console.log(`Port is listening at local host ${port}`);
});
