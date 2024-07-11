const db = require("../db/database");

const applyLeave = ({
   employeeid,
  startDate,
  endDate,
  totalDays,
  message,
}) => {
  const query = `INSERT INTO leaves ( employeeid, start_date, end_date, total_days, message) VALUES (?, ?, ?, ?, ?)`;
  return new Promise((resolve, reject) => {
    db.query(
      query,
      [ employeeid, startDate, endDate, totalDays, message],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  applyLeave,
};
