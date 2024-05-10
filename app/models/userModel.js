const db = require('../../config/db');

class User {
  static create(name, email) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results.insertId);
      });
    });
  }
}

module.exports = User;
