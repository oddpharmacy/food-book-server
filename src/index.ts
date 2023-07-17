import express from "express";
import cors from "cors";
import router from "./routes/routes";
require("dotenv").config();

const allowedOrigins = ["http://127.0.0.1:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
const PORT = 8080;

const app = express();

app.use(cors(options));
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
