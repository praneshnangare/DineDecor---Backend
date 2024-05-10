const db = require('../../config/db');

class OrderChair {
  static create(orderId, chairId) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Order_Chairs (order_id, chair_id) VALUES (?, ?)', [orderId, chairId], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results.insertId);
      });
    });
  }
}

module.exports = OrderChair;
