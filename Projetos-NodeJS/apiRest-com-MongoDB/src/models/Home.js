const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    salary: { type: Number, require: true },
    approved: { type: Boolean, require: true },
    date: { type: Date, default: Date.now },
});

const HomeModel = mongoose.model('Person', HomeSchema);

class Home {
    constructor() {
        this.errors = []
    }

    async criar(body) {
        this.validator(body);
        if (this.errors.length > 0) return

        const person = await HomeModel.create(body);

        return person
    }

    async listar() {
        const people = await HomeModel.find();

        return people
    }

    async exibir(id) {
        const person = await HomeModel.findById(id);

        return person
    }

    async atualizar(id, body) {
        const person = await HomeModel.findByIdAndUpdate(id, body, { new: true });

        return person
    }

    async deletar(id) {
        await HomeModel.findByIdAndDelete(id);
    }

    validator(body) {
        const { name, salary, approved } = body;

        if (name.length < 3) this.errors.push('O campo "Name" precisa ter pelo menos 3 caracteres')
        if (!salary) this.errors.push('O campo "Salary" precisa ser preenchido')
        if (typeof approved != 'boolean') this.errors.push('Dado inválido')
    }
}

module.exports = new Home();
