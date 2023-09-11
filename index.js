const express = require("express");
const app = express();
const port = 3000;

app.get("/api", function (req, res) {
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  let currentDay = new Date();
  let weekDays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let dayOfWeek = weekDays[currentDay.getDay()];
  console.log(slack_name, track);
  const data = {
    slack_name: slack_name,
    current_day: dayOfWeek,
    utc_time: currentDay,
    track: track,
    status_code: 200
  };
  res.status(200).json({
    data
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
