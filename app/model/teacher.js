module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const TeacherSchema = new Schema({
    tec_id: { type: String, required: true, unique: true },
    hobby: { type: String },
    sex: { type: String, required: true },
    stu_list: { type: Array, default: [] },
    date: { type: Date, default: Date.now }
  })
  return mongoose.model('Teacher', TeacherSchema)
}
