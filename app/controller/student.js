'use strict';

const Controller = require('egg').Controller;
/**
 * @controller 学生列表
 */
// 创建学生规则
const createRule = {
  name: { type: 'string', required: true },
  stu_id: { type: 'string', required: true, },

};

class StudentController extends Controller {
  /**
   * @summary 获取学生列表
   * @description
   * @router get /api/student
   * @request query number pageNo 页码 默认 1
   * @request query number pageSize 单页数量 默认 10
   * @response 200 responseStudent 学生列表
   */
  async index() {
    const { ctx } = this
    const payload = ctx.query
    const data = await ctx.service.student.index(payload)
    ctx.helper.success({ ctx, data })
  }
  /**
 * @summary 获取学生详情
 * @description
 * @router get /api/student/{id}
 * @request path string *id 学生id
 * @response 200 studentInfo 学生信息
 */
  async show() {
    const { ctx } = this
    const _id = ctx.params.id
    const data = await ctx.model.Student.findById({ _id }, { __v: 0 })
    ctx.body = {
      data,
      status: 200,
      success: true
    }
  }
  /**
  * @summary 新增学生列表
  * @description 新增学生
  * @router post /api/student
  * @request body createStudent
  * @response 200 studentInfo 学生信息
  */
  async create() {
    const { ctx } = this
    const body = ctx.request.body
    ctx.validate(createRule, body)
    const data = await ctx.model.Student.create(body)
    ctx.body = {
      data,
      status: 200,
      success: true
    }
  }
}

module.exports = StudentController;
