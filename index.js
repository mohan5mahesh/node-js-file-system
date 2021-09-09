import express from "express";
import dotenv from "dotenv";
import { appendFile } from "fs";
import cors from "cors";
dotenv.config();

const time = express();
const port = process.env.PORT;

time.use(express.json());
time.use(cors());
time.get("/", (request, response) => {
  response.send("Hello MOTO!!");
});

time.get("/time", (request, response) => {
  const result = appendFile("message.txt", currentTime(), (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  response.send(result);
});

function currentTime() {
  var currentTimeInMilliseconds = Date.now();
  return currentTimeInMilliseconds;
}

time.listen(port, () => console.log("The server is started!", port));
