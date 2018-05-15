
const Service = require('egg').Service;
class UserService extends Service {
  async query(userId) {
    let results = {};
    if (userId == null) {
      results = await this.app.mysql.select('userdata', { userId: userId });
    } else {
      results = await this.app.mysql.get('userdata', { userId: userId });
    }
    return { results };
  }
  async delete(userId) {
    await this.app.mysql.delete('userdata', { userId: userId });
    const results = {
      status: 0,
    }
    return { results };
  }
  async create(userData) {
    await this.app.mysql.insert('userdata', userData);
    const results = {
      status: 0,
    }
  }
  async update(userData) {
    const { userId ,name,age,address} =userData;
    const row = {
      name,
      age,
      address
      // modifiedAt: this.app.mysql.literals.now,
    };
    const options = {
      where: {
        userId
      }
    };
    await this.app.mysql.update('userdata', row, options);
    const results = {
      status: 0,
    };
  }
}

module.exports = UserService;
