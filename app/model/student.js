module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const StudentSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number
    },
    sex: {
      type: String
    },
    stu_id: {
      type: String,
      unique: true,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
    },
    info: Schema.Types.Mixed
  })
  return mongoose.model('Student', StudentSchema)
}
