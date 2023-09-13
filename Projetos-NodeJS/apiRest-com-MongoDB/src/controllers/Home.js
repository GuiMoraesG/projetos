const homeModel = require('../models/Home');

class Home {
    async store(req, res) {
        try {
            const person = await homeModel.criar(req.body);

            if (homeModel.errors.length > 0) {
                res.status(400).json({
                    errors: homeModel.errors,
                });

                homeModel.errors = []
                return
            }

            return res.status(201).json(person);
        } catch (e) {
            res.status(500);
        }
    }

    async index(req, res) {
        try {
            const people = await homeModel.listar();

            return res.json(people);
        } catch (e) {
            res.status(500);
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const person = await homeModel.exibir(id);

            if (!person) {
                return res.json({
                    errors: 'Person not find !',
                })
            }

            return res.json(person);
        } catch (e) {
            res.status(500);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const person = await homeModel.atualizar(id, req.body);

            if (!person) {
                return res.status(400).json({
                    errors: 'Person not find !',
                })
            }

            return res.json(person);
        } catch (e) {
            res.status(500);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const person = await homeModel.exibir(id);

            if (!person) {
                return res.status(400).json({
                    errors: 'Person not find !',
                })
            }

            await homeModel.deletar(id);

            return res.json({
                success: 'Person deleted !',
            });
        } catch (e) {
            res.status(500);
        }
    }
}

module.exports = new Home();