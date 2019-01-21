const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("view options", { doctype: "html" });
app.use(express.static('public'));

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
    //res.sendFile(path.join("/sandbox/views/index.html"));
    res.render("index2", { emotions: emotions, userEmotions: userEmotions });
  })
  .post(function(req, res) {
    // Parse form submitted emotion
    // Initialize current time Date()
    let newEmotion = req.body.emotion;
    let emotionDate = new Date().toDateString();

    // Create or append emotionDate to given emotion
    if (!userEmotions[newEmotion]) {
      userEmotions[newEmotion] = [emotionDate];
    } else {
      userEmotions[newEmotion].push(emotionDate);
    }

    res.redirect("/");
  });



app.listen(8080, function() {
  console.log("Listening on 8080");
});
