// const DatabaseMemory = require('../config/database-memory');
// const database = new DatabaseMemory();
const { Op } = require('sequelize');
const Video = require('../model/video');

module.exports.index = async (req, res) => {
    try {
        const { search } = req.query;

        if (search) {
            const videosDB = await Video.findAll({
                where: {
                    title: {
                        [Op.like]: `%${search}%`,
                    },
                },
            });

            return res.json(videosDB);
        }

        const videosDB = await Video.findAll();

        return res.json(videosDB);

    } catch (e) {
        return res.status(400).json({
            errors: 'Nenhum videos registrados',
        });
    }
};

module.exports.store = async (req, res) => {
    try {
        // database.create(req.body);
        await Video.create(req.body);

        return res.status(201).json({ success: 'Criado !' });
    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map((err) => err.message),
        });
    }
};

module.exports.update = async (req, res) => {
    // const videoId = req.params.id;
    // database.update(videoId, req.body);
    try {
        const { id } = req.params;
        const video = await Video.findByPk(id);

        if (!video) return res.status(400).json({
            errors: 'Video não encontrado',
        });

        const videoAtt = await video.update(req.body);

        return res.json(videoAtt);
    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map((err) => err.message),
        });
    }
};

module.exports.delete = async (req, res) => {
    // const videoId = req.params.id;
    // database.delete(videoId);
    try {
        const { id } = req.params;
        const video = await Video.findByPk(id);

        if (!video) return res.status(400).json({
            errors: 'Video não encontrado',
        });

        await video.destroy();

        return res.status(200).json({
            success: 'Video deletado com sucesso !',
        });
    } catch (e) {
        return res.status(400);
    }
};
