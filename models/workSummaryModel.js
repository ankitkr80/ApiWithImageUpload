// models/workSummaryModel.js

const db = require("../db/database");

const submitWorkSummary = (
   employeeid,
  startDate,
  endDate,
  startTime,
  endTime,
  summary,
  totalHours,
  callback
) => {
  const query = `INSERT INTO work_summaries ( employeeid, date, start_time, end_time, summary, total_hours) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    query,
    [ employeeid, startDate, startTime, endTime, summary, totalHours],
    (err, results) => {
      if (err) {
        console.error("Error submitting work summary:", err);
        callback(err);
        return;
      }
      console.log("Work summary submitted successfully");
      callback(null);
    }
  );
};

module.exports = {
  submitWorkSummary,
};
