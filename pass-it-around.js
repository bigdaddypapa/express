const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h3>99 Bottles of beer on the wall</h3>
    <a href ="/98">Take one down, pass it around</a>`);
});

app.get("/:numOfBottles", (req, res) => {
  let bottleNumbers = req.params.numOfBottles;
  if (bottleNumbers > 0) {
    res.send(`<h3>${bottleNumbers} Bottles of beer on the wall</h3>
        <a href ="/${bottleNumbers - 1}">Take one down, pass it around</a>`);
  } else {
    res.send(`No more beers! <a href ="/">Please start over</a>`);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
