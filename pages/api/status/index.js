import dbConnect from '../../../middlewares/dbConnect';
import dbQuery from '../../../models/dbQuery';
// import * as util from 'util';

function table(arr) {
  let lean = arr.map((doc) => doc.toObject());
  return console.table(lean);
}

const handler = async (req, res) => {
  const totalRequest = await dbQuery.find();
  const currentTime = new Date();
  table(totalRequest);
  res.status(200).json(`Server is up and has served ${totalRequest.length} requests as of ${currentTime.toDateString()}`);
}

export default dbConnect(handler);