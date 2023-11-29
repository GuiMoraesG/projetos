const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const novoUsuario = await User.create(req.body);
            return res.json(novoUsuario);
        } catch (e) {
            return console.log(e);
        }
    },

    // delete(req, res) { res.json({ tchau: 'tchau' }); },
};
