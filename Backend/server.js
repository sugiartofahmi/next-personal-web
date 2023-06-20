import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { connectDB } from "./config/database.js";

const port = process.env.PORT;
const app = express();
config();
connectDB();
app.use(express.json());
app.use(cors());
app.all("*", (req, res) =>
  res.status(404).json({
    status: "failed",
    message: "Sorry, the route you are going to does not exist",
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
