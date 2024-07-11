const db = require("../db/database");

const createUser = ({
  name,
  employeeid,
  email,
  password,
  mobile,
  designation,
}) => {
  const query = `INSERT INTO users (name, employeeid, email, password, mobile, designation) VALUES (?, ?, ?, ?, ?, ?)`;
  return new Promise((resolve, reject) => {
    db.query(
      query,
      [name, employeeid, email, password, mobile, designation],
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

const findUserByEmployeeId = (employeeid) => {
  const query = `SELECT * FROM users WHERE employeeid = ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [employeeid], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const findUserByEmail = (email) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = {
  createUser,
  findUserByEmployeeId,
  findUserByEmail,
};
