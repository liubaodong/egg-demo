'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 重定向路由
  app.router.redirect('/', '/swagger-ui.html', 302);
  // 学生接口
  router.resources('student', '/api/student', controller.student)
  // 教师接口
  router.resources('teacher', '/api/teacher', controller.teacher)

  // 文件上传
  router.resources('upload', '/api/upload', controller.upload)
};
