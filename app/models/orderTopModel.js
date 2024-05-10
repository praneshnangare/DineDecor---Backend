const db = require('../../config/db');

class OrderTop {
  static create(orderId, topId) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Order_Tops (order_id, top_id) VALUES (?, ?)', [orderId, topId], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results.insertId);
      });
    });
  }
}

module.exports = OrderTop;
