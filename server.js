const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'});
const app = require('./app');
const db = process.env.DATABASE;
mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connrction successful');
  });

  const port = 3200;
  app.listen(port,()=>{
      console.log(`App running on port ${port}`);
  });
