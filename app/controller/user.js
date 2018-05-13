'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userEm() {
    const {ctx , service }  =this;
    const funName = ctx.params.funName;
    let  concent = '404';
    // if(funName =='query'){
    //   // 查询用户
      concent  = await service.user.query();  
    // }
    ctx.body = concent;
  }
}

module.exports = UserController;
