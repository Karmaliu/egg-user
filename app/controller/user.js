'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userEm() {
    const { ctx, service } = this;
    const funName = ctx.params.funName;
    let concent = '404';
    const { userId, name } = ctx.query;
    if (funName == 'userQuery') {
      //用户查询
      concent = await service.user.query(name);
    } else if (funName == 'userDelete') {
      //删除用户
      concent = await service.user.delete(userId);
    }
    ctx.body = concent;
  }
  async userCreate() {
    const { ctx, service } = this;
    const postFunName = ctx.params.postFunName;
    const userData = ctx.request.body;
    if (postFunName == 'userCreate') {
      //创建用户
      const concentCreate = await service.user.create(userData);
      ctx.body = concentCreate;
    } else if (postFunName == 'userUpdate') {
      //修改用户
      const concentUpdate = await service.user.update(userData);
      ctx.body = concentUpdate;
    }
  }
}

module.exports = UserController;
