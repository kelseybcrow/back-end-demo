const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mockDb = [
  "pencil",
  "pen",
  "dirt",
  "leaf",
  "elephant",
  "the one ring",
  "desk",
  "light",
  "my axe",
];

app.get("/api/inventory", (req, res) => {
  console.log("hit");
  // res.sendStatus(200)
  res.status(200).send(mockDb);
  console.log("hit2");
});

app.get("/api/inventory/:itemIndex", (req, res) => {
  console.log(req.params.itemIndex);
  console.log("-------------");
  /// putting a + sign first makes it a number instead of a string
  res.status(200).send(mockDb[+req.params.itemIndex]);
});

app.listen(5050, () => console.log("Server running on port 5050"));
