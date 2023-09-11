const DatabaseMemory = require('../config/database-memory');
const database = new DatabaseMemory();
const Video = require('../model/video');

module.exports.index = (req, res) => {
    const { search } = req.query;
    const videos = database.list(search);

    return res.json(videos);
};

module.exports.store = async (req, res) => {
    database.create(req.body);
    await Video.create(req.body)

    return res.status(201).json({ success: 'Criado !' });
};

module.exports.update = (req, res) => {
    const videoId = req.params.id;
    database.update(videoId, req.body);

    return res.status(204);
};

module.exports.delete = (req, res) => {
    const videoId = req.params.id;
    database.delete(videoId);

    return res.status(200);
};
