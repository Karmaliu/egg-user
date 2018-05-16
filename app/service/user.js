
const Service = require('egg').Service;
class UserService extends Service {
  async query(name) {
    let results = {};
    if (name === 'empty') {
      results = await this.app.mysql.select('userdata');
    } else {
      const sql = "select * from userdata where name like ?;";
      results = await this.app.mysql.query(sql, ['%' + name + '%'], function(err, row){});
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
    return { results };
  }
  async update(userData) {
    const { userId, name, age, address } = userData;
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
    const result = await this.app.mysql.update('userdata', row, options);
    const updateSuccess = result.affectedRows === 1;
    const results = {
      status: 0,
    }
    if (updateSuccess) {
      return { results }
    }
  }
}

module.exports = UserService;
