const db = require('../../config/db');

class Order {
  static create(amount, userId) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Orders (amount, user_id) VALUES (?, ?)', [amount, userId], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results.insertId);
      });
    });
  }
}

module.exports = Order;
