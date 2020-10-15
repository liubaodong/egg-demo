module.exports = {
  responseStudent: {
    data: { type: 'array', itemType: 'student' },
    code: { type: 'number', description: '状态码', example: 0 },
    msg: { type: 'string', description: '返回信息', example: '请求成功' },
  },
  studentInfo: {
    data: { type: 'student' },
    code: { type: 'number', description: '状态码', example: 0 },
    msg: { type: 'string', description: '返回信息', example: '请求成功' },
  }
}
