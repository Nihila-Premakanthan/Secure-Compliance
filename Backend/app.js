const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const transactionRoutes = require("./FinanceManagement/FinanceRoute");

const paymentRoutes = require("./FinanceManagement/Payment/PaymentRoute");


const db = require("./DB/connection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());



//Finance Management
app.use("/transactions", transactionRoutes);
app.use("/payments", paymentRoutes);



// auth
// auth only
app.use("/auth", require("./auth/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
