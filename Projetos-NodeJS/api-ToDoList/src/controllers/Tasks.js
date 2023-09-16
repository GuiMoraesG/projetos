const taskModel = require('../models/Tasks');

class TaskController {
    async index(req, res) {
        const tasks = await taskModel.getAll();

        return res.status(202).json(tasks);
    }

    async store(req, res) {
        const task = await taskModel.createTask(req.body);

        return res.status(201).json(task);
    }
}

module.exports = new TaskController();
