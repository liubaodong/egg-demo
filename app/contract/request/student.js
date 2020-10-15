module.exports = {
  createStudent: {
    name: { type: 'string', required: true, description: '学生姓名' },
    sex: { type: 'string', description: '学生性别' },
    age: { type: 'string', description: '学生年龄' },
    stu_id: { type: 'string', required: true, description: '学生学号' },
    info: { type: 'string', description: '学生介绍' }
  },


}


