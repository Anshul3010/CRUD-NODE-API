const express = require('express');
const app = express();
const CostumerRouter = require('./routes/CostumerRoutes');
app.use(express.json());

app.use('/api/costumer',CostumerRouter);
module.exports=app;