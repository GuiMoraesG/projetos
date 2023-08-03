exports.index = (req, res) => {
    res.render('login')
}

exports.registrar = (req, res) => {
    res.send(req.body)
}