const connection = require('./connection');

class TaskModel {
    async getAll() {
        const [tasks] = await connection.execute('SELECT * FROM tasks');

        return tasks;
    }

    async createTask(body) {
        const { TITLE } = body;

        if (!TITLE) return 'wrong';

        await connection.execute(`insert into tasks (TITLE, STATUS) values ('${TITLE}', 'Pendente')`);
    }

    async updateTask(id, body) {
        const { TITLE, STATUS } = body;
        const task = await connection.execute(`update tasks set title='${TITLE}', status='${STATUS}' where id='${id}'`);

        return task;
    }

    async deleteTask(id) {
        const task = await connection.execute(`delete from tasks where id='${id}'`);

        return task;
    }
}

module.exports = new TaskModel();
