const taskModel = require('../models/Tasks');

class TaskController {
    async index(req, res) {
        const tasks = await taskModel.getAll();

        return res.status(201).json(tasks);
    }
}

module.exports = new TaskController();
