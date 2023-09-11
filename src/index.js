const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: ["https://lime-dizzy-tuna.cyclic.app/api"],
    methods: ["GET"],
  })
);

app.get("/api", function (req, res) {
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  let currentDay = new Date();
  let weekDays = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  let dayOfWeek = weekDays[currentDay.getDay()];
  const file =
    "https://github.com/Rabiu-Adeola-Mustapha/HNG-First-Task/blob/main/src/index.js";
  const github = "https://github.com/Rabiu-Adeola-Mustapha/HNG-First-Task";
  console.log(slack_name, track);
  // const data = {
  //   slack_name: slack_name,
  //   current_day: dayOfWeek,
  //   utc_time: currentDay,
  //   track: track,
  //   github_file_url: file,
  //   github_repo_url: github,
  //   status_code: 200,
  // };
  res.status(200).json({
    slack_name: slack_name,
    current_day: dayOfWeek,
    utc_time: currentDay,
    track: track,
    github_file_url: file,
    github_repo_url: github,
    status_code: 200,
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
