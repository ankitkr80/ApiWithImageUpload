// models/imageModel.js
const db = require("../db/database");

const Image = {};

Image.create = (newImage, result) => {
  db.query("INSERT INTO images SET ?", newImage, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newImage });
  });
};

module.exports = Image;
