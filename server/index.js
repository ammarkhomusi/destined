const express = require("express");
const router = require("./routes/router.js");
const cors = require("cors");

const app = express();
const PORT = 3000;
const DATABASE_URL = "mongodb://localhost:27017/destined";
app.use(cors());

// Database Connection
// connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Loud Routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
