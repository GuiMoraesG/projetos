const connection = require('./connection');

class TaskModel {
    async getAll() {
        const [tasks] = await connection.execute('SELECT * FROM tasks');

        return tasks;
    }

    async createTask(body) {
        const { TITLE } = body;
        const task = await connection.execute(`insert into tasks (TITLE, STATUS) values ('${TITLE}', 'Pendente')`);

        return task;
    }
}

module.exports = new TaskModel();
