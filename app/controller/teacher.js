'use strict';

const Controller = require('egg').Controller;
/**
 * @controller 教师列表
 */
const role = {
  tec_id: { type: 'string', required: true },
  sex: { type: 'string', required: true },
}

class TeacherController extends Controller {
  /**
   * @summary 新增教师
   * @descripiton 新增教师
   * @router post /api/teacher
   * @request body createTeacher 教师信息
   * @response 200 teacherInfo 创建成功
   */
  async create() {
    const { ctx } = this
    const body = ctx.request.body
    console.log('body', body)
    ctx.validate(role, body)
    const data = await ctx.model.Teacher.create(body)
    ctx.helper.success({ ctx, data })
  }
  /**
 * @summary 修改教师
 * @descripiton 修改教师
 * @router put /api/teacher/{id}
 * @request path string *id 教师id
 * @request body updateTecher 教师信息
 * @response 200 teacherInfo 创建成功
 */
  async update() {
    const { ctx } = this
    const id = ctx.params.id
    const body = ctx.request.body
    ctx.validate(role, body)
    const data = await ctx.service.teacher.update(id, body)
    ctx.helper.success({ ctx, data })
  }
  /**
* @summary 获取教师信息
* @descripiton 获取教师信息
* @router get /api/teacher/{id}
* @request path string *id 教师id
* @response 200 teacherInfo 教师信息
*/
  async show() {
    const { ctx } = this
    const id = ctx.params.id
    const data = await ctx.service.teacher.show(id)
    ctx.helper.success({ ctx, data })
  }
  /**
* @summary 获取教师列表
* @descripiton 获取教师列表
* @router get /api/teacher
* @request query string id 教师id
* @request query number pageNo 当前页 默认 1
* @request query number pageSize 每页 条数 默认 10
* @response 200 teacherList 教师信息
*/
  async index() {
    const { ctx } = this
    const query = ctx.query
    const data = await ctx.service.teacher.index(query)
    ctx.helper.success({ ctx, data })
  }
}

module.exports = TeacherController;
