class Home {
    index(req, res) {
        return res.json({
            msg: 'OI',
        });
    }
}

module.exports = new Home();