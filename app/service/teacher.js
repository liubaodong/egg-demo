'use strict';

const Service = require('egg').Service;

class TeacherService extends Service {
  async show(_id) {
    const { ctx } = this
    const data = await ctx.model.Teacher.findById(_id, { __v: 0 })
    return data
  }
  async update(_id, body) {
    const { ctx } = this
    const data = await ctx.model.Teacher.findById(_id)
    if (!data) ctx.throw(404, 'id not found')
    await ctx.model.Teacher.findByIdAndUpdate(_id, body)
    return ctx.model.Teacher.findById(_id)
  }
  async index(payload) {
    const { ctx } = this
    const { pageNo = 1, pageSize = 10, search } = payload
    let res = []
    let count = 0
    let skip = ((pageNo - 1) * (pageSize || 10));
    if (search) {

    } else {
      res = await ctx.model.Teacher.find({}).skip(skip).limit(pageSize * 1).sort({ date: -1 }).exec()
      count = await ctx.model.Teacher.count({}).exec()
    }
    return { list: res, pageNo: pageNo * 1, pageSize: pageSize * 1, count }
  }
}

module.exports = TeacherService;
