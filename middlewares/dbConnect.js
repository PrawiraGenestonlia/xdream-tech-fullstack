import mongoose from 'mongoose';
import dbQuery from '../models/dbQuery';

require('dotenv').config();

const logDB = async (req) => {
  const newQuery = new dbQuery({
    userAgent: req.headers['user-agent']
  });
  await newQuery.save();
}

const dbConnect = handler => async (req, res) => {
  // if (req.body) req.body = JSON.parse(req.body);
  if (!mongoose.connection.readyState) {
    const uri = process.env.MONGODB_URL;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      autoIndex: false,
      useFindAndModify: false,
      useUnifiedTopology: true
    }).then(() => {
      console.log("connected to db!");
      logDB(req);
      return handler(req, res);
    }).catch(err => {
      console.error(err);
      return -1;
    });
  }
  logDB(req);
  return handler(req, res);
}

export default dbConnect