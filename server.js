const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./app/routes/orderRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
