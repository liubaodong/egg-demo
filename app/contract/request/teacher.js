module.exports = {
  createTeacher: {
    tec_id: { type: 'string', required: true, description: '教师工号' },
    name: { type: 'string', description: '教师姓名' },
    sex: { type: 'string', required: true, description: '教师性别', },
    age: { type: 'string', description: '教师年龄' },
    hobby: { type: 'string', description: '教师爱好' },
  },
  updateTecher: {
    tec_id: { type: 'string', required: true, description: '教师工号' },
    name: { type: 'string', description: '教师姓名' },
    sex: { type: 'string', required: true, description: '教师性别', },
    age: { type: 'string', description: '教师年龄' },
    hobby: { type: 'string', description: '教师爱好' },
    stu_list: { type: 'array', itemType: 'string', description: '学生列表', },
  }
}
