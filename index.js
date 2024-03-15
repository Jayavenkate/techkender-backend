import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());
const MONGO_URL = "mongodb+srv://jaya:jaya123@cluster0.q8ola8v.mongodb.net";
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("The mongo is connected");
app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/create", async (req, res) => {
  const data = req.body;
  const result = await client
    .db("b42wd2")
    .collection("teck")
    .insertOne({ data });
  res.status(200).send({ message: "user add successfully", result });
});

app.get("/getdata", async (req, res) => {
  const result = await client
    .db("b42wd2")
    .collection("teck")
    .find({})
    .toArray();
  res.status(200).send(result);
});
app.listen(PORT, () => {
  console.log(`the port is running successfully  ${PORT}`);
});
