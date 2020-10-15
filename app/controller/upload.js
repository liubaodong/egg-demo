'use strict';
// node.js 操作文件
const fs = require('mz/fs')
const path = require('path')
/**
 * @controller 文件上传
 */

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async index() {

  }
  /**
   * @summary 新增文件
   */
  async create() {
    const { ctx } = this
    let result
    const file = ctx.request.files[0];
    const name = file.filename
    if (!name) ctx.throw(422, '名字不能为空')
    console.log('file', file)
    try {
      // 处理文件，比如上传到云端
      //  result = await ctx.oss.put(name, file.filepath);

    } finally {
      // 需要删除临时文件
      const emp = await fs.unlink(file.filepath);
      console.log('emp', emp)
    }
    const data = {
      url: file.filepath
    }

    ctx.helper.success({ ctx, data })
  }
}

module.exports = UploadController;
