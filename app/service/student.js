'use strict';

const Service = require('egg').Service;

class StudentService extends Service {
  // 处理学生列表
  async index(payload) {
    const { ctx } = this
    const { pageNo = 1, pageSize = 10, isPaging, search } = payload
    let res = []
    let count = 0
    let skip = ((pageNo - 1) * (pageSize || 10));
    // 判断分页
    if (isPaging) {
      if (search) {
      } else {
        res = await ctx.model.Student.find({}).skip(skip).limit(pageSize * 1).exec()
        count = await ctx.model.Teacher.count({}).exec()
      }
    } else {
      res = await ctx.model.Student.find({}, { __v: 0, }).skip(skip).limit(pageSize * 1).sort({ date: -1 }).exec()
      count = res.length
    }
    return { list: res, pageNo: pageNo * 1, pageSize: pageSize * 1, count }
  }
}

module.exports = StudentService;
