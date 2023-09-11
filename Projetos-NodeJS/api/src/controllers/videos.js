const DatabaseMemory = require('../config/database-memory');
const database = new DatabaseMemory();

module.exports.index = (req, res) => {
    const videos = database.list();

    return res.json(videos);
};

module.exports.store = (req, res) => {
    database.create(req.body);

    return res.status(201).json({ success: 'Criado !' });
};

module.exports.show = (req, res) => {
    return res.send('show');
};

module.exports.update = (req, res) => {
    return res.send('update');
};

module.exports.delete = (req, res) => {
    return res.send('delete');
};