import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  userAgent: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.dbQuery || mongoose.model('dbQuery', schema);