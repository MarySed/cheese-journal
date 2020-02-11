// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();
app.use(express.json()); //need to use this otherwise your post requests don't show up and it returns "req.body" as undefined. I need to look more into this. Solution from: https://stackoverflow.com/questions/9177049/express-js-req-body-undefined

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/test", async (req, res) => {
  res.send("Hello World");
  res.sendStatus(200);
});

//get all Cheese data

app.get("/cheeses", async (req, res) => {
  try {
    const cheeses = await db.select().table("cheese_table");

    const results = [];

    cheeses.map(cheese => {
      if (cheese.cheese_name_en !== "") {
        results.push(cheese);
      }
    });

    res.send(results);
    //res.sendStatus(200);
  } catch (err) {
    console.error("Who stole the cheese?", err);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const postData = req.body;
  console.log(postData);
  console.log(postData[0].cheese_name_en);

  db.insert([
    {
      cheese_name_en: postData[0].cheese_name_en,
      manufacturer_name_en: postData[0].manufacturer_name_en,
      flavor_en: postData[0].flavor_en,
      category_type: postData[0].category_type,
      rind_type: postData[0].rind_type,
      milk_type: postData[0].milk_type
    }
  ])
    .returning("*")
    .into("cheese_table")
    .then(function(data) {
      res.send(data);
      //res.sendStatus(200);
    });

  //res.sendStatus(200);
});

//get Cheese Names
app.get("/cheeses/names", async (req, res) => {
  try {
    //filter out unnamed cheeses (I should do this in the axios request in jsx)
    const cheeses = await db.select("cheese_name_en").table("cheese_table");
    /*
    const results = [];

    cheeses.map(cheese => {
      if (cheese.cheese_name_en !== "") {
        results.push(cheese);
      }
    });
    */

    res.send(cheeses);
    res.sendStatus(200);
  } catch (err) {
    console.error("The cheese is all gone", err);
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
