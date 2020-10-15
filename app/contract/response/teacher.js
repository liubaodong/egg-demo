module.exports = {
  responseTeacher: {
    data: { type: 'array', itemType: 'teacher' },
    code: { type: 'number', description: '状态码', example: 0 },
    msg: { type: 'string', description: '返回信息', example: '请求成功' },
  },
  teacherInfo: {
    data: { type: 'teacher' },
    code: { type: 'number', description: '状态码', example: 0 },
    msg: { type: 'string', description: '返回信息', example: '请求成功' },
  },
  teacherList: {
    data: { type: 'array', itemType: 'teacher' },
    code: { type: 'number', description: '状态码', example: 0 },
    msg: { type: 'string', description: '返回信息', example: '请求成功' },
  }
}
