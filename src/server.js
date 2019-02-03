const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("view options", { doctype: "html" });
app.use(express.static("public"));
app.use(express.static("views"));

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

app.route("/").get(function(req, res) {
  //res.sendFile(path.join("/sandbox/views/index.html"));
  res.render("index2", { emotions: emotions, userEmotions: userEmotions });
});

app.route("/add").post(function(req, res) {
  // Parse form submitted emotion
  // Initialize current time Date()
  console.log(req.body);
  let newEmotions = req.body.emotions;
  let emotionDate = new Date().toDateString();

  // Create or append emotionDate to given emotion
  newEmotions.forEach(function(emotion) {
    if (!userEmotions[emotion]) {
      userEmotions[emotion] = [emotionDate];
    } else {
      userEmotions[emotion].push(emotionDate);
    }
  });

  res.send({ message: "Submitted emotion", error: "No errors" });
});

app.route("/test").get(function(req, res) {
  res.render("test", { emotions: emotions, userEmotions: userEmotions });
});
app.listen(8080, function() {
  console.log("Listening on 8080");
});
