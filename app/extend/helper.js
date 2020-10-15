const moment = require('moment')

// 时间处理
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')
// 处理成功响应
exports.success = ({ ctx, data = null, msg = '请求成功' }) => {
  ctx.body = {
    data,
    msg,
    code: 0
  }
}
