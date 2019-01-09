const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");

// Emotions to be listed as options in select menu
let emotions = [
  "optimism",
  "love",
  "submission",
  "awe",
  "disapproval",
  "remorse",
  "contempt",
  "aggressiveness",
  "interest",
  "serenity",
  "acceptance",
  "apprehension",
  "distraction",
  "pensiveness",
  "boredom",
  "annoyance",
  "anticipation",
  "joy",
  "trust",
  "fear",
  "surprise",
  "sadness",
  "disgust",
  "anger",
  "vigilance",
  "ecstasy",
  "admiration",
  "terror",
  "amazement",
  "grief",
  "loathing",
  "rage"
];

// { emotion: date }
let userEmotions = {};

app
  .route("/")
  .get(function(req, res) {
    res.render("index", { emotions: emotions });
  })
  .post(function(req, res) {
    console.log(req.body);
    res.redirect("/");
  });
app.listen(8080, function() {
  console.log("Listening on 8080");
});
