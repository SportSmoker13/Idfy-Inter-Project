const express = require("express");
const app = express();
const port = 3001;
var fs = require("fs");
var { parse } = require("csv-parse");
const cors = require("cors");
app.use(cors());

let resA = [];

fs.createReadStream("./test.csv")
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", function (row) {
    resA = [...resA, [row[2], row[0], row[1], row[3]]];
  });

app.get("/", (req, res) => {
  res.send(resA[0].map((col, i) => resA.map((row) => row[i])));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
