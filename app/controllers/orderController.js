const Order = require('../models/orderModel');
const OrderChair = require('../models/orderChairModel');
const OrderTable = require('../models/orderTablesModel');
const OrderTop = require('../models/orderTopModel');
const User = require('../models/userModel');


const createOrderWithItems = async (userDetails, orderDetails) => {
  try {
    const userId = await User.create(userDetails.name, userDetails.email);
    const items = orderDetails.items;
    const amount = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const orderId = await Order.create(amount, userId);
    for (const item of items) {
      switch (item.category) {
        case 'Chairs':
          await OrderChair.create(orderId, item.id);
          break;
        case 'Tables':
          await OrderTable.create(orderId, item.id);
          break;
        case 'Dining tops':
          await OrderTop.create(orderId, item.id);
          break;
        default:
          console.error('Invalid category:', item.id);
          break;
      }
    }
    console.log('Order created successfully with items');
  } catch (error) {
    console.error('Error creating order:', error);
  }
}

exports.handleOrderRequest = (req, res) => {
const { userDetails, orderDetails } = req.body;
createOrderWithItems(userDetails, orderDetails)
  .then(() => {
    res.send('Order placed successfully');
  })
  .catch((error) => {
    console.error('Error handling order request:', error);
    res.status(500).send('Error placing order');
  });
}
