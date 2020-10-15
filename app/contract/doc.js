module.exports = {
  student: {
    name: { type: 'string', description: '学生姓名' },
    sex: { type: 'string', description: '学生性别', },
    age: { type: 'string', description: '学生年龄' },
    stu_id: { type: 'string', description: '学生学号', },
    info: { type: 'string', description: '学生介绍' }
  },
  teacher: {
    tec_id: { type: 'string', description: '教师工号' },
    stu_list: { type: 'array', itemType: 'string', decription: '学生id' },
    name: { type: 'string', description: '教师姓名' },
    sex: { type: 'string', description: '教师性别', },
    age: { type: 'string', description: '教师年龄' },
    hobby: { type: 'string', description: '教师爱好' },
  },

}
