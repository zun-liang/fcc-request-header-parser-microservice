import * as dotenv from "dotenv";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { StatusCodes } from "http-status-codes";

dotenv.config();
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));
app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
