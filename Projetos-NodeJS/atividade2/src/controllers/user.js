const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const { id, created_at, updated_at, nome } = await User.create(req.body);
            return res.json({ id, created_at, updated_at, nome });
        } catch (e) {
            return res.status(400).json({
                mensagem: e.errors.map((err) => err.message),
            });
        }
    },

    // delete(req, res) { res.json({ tchau: 'tchau' }); },
};
