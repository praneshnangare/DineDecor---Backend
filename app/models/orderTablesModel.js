const db = require('../../config/db');

class OrderTable {
  static create(orderId, tableId) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Order_Tables (order_id, table_id) VALUES (?, ?)', [orderId, tableId], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results.insertId);
      });
    });
  }
}

module.exports = OrderTable;
