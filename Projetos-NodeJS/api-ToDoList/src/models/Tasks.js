const connection = require('./connection');

class TaskModel {
    async getAll() {
        const tasks = await connection.execute('SELECT * FROM tasks');

        return tasks;
    }
}

module.exports = new TaskModel();
