'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:funName',controller.user.userEm);
  router.post('/user/:postFunName',controller.user.userCreate);
};
