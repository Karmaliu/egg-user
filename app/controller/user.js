'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userEm() {
    const { ctx, service } = this;
    const funName = ctx.params.funName;
    let concent = '404';
    const { userId } = ctx.query;
    if (funName == 'userQuery') {
      // 查询用户
      concent = await service.user.query(userId);
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
    const concent ='404';
    if(postFunName =='userCreate'){
      //创建用户
      concent = await service.user.create(userData);
    }else if(postFunName == 'userUpdate'){
      //修改用户
      concent = await service.user.update(userData);
    }
    ctx.body =concent;
  }
}

module.exports = UserController;
