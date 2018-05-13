
const Service = require('egg').Service;
class UserService extends Service {
    async query() {
        const results = await this.app.mysql.select('userdata');
      return { results };
    }
  }
  
module.exports = UserService;
