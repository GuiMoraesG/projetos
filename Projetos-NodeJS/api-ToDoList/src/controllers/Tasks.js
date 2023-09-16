const taskModel = require('../models/Tasks');

class TaskController {
    async index(req, res) {
        try {
            const tasks = await taskModel.getAll();

            return res.status(202).json(tasks);
        } catch (e) {
            return res.status(400).json({ errors: 'BAD CONNECTION' });
        }
    }

    async store(req, res) {
        try {
            const task = await taskModel.createTask(req.body);

            if (task === 'wrong') return res.status(400).json({ errors: 'you must complete the fields' });

            return res.status(201).json({ success: 'Created Task !' });
        } catch (e) {
            return res.status(400).json({ errors: 'BAD CONNECTION' });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const [task] = await taskModel.deleteTask(id);

            if (task.affectedRows == 0) return res.status(400).json({ errors: 'Task not found' });

            return res.status(200).json({ success: 'Task Deleted !' });
        } catch (e) {
            return res.status(400).json({ errors: 'BAD CONNECTION' });
        }
    }
}

module.exports = new TaskController();
