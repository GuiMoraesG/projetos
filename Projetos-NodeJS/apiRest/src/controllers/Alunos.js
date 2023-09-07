import Aluno from '../models/Aluno';

class AlunosController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async store(req, res) {
    try {
      const Novoaluno = await Aluno.create(req.body);
      return res.json(Novoaluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errros: ['Student not found'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errros: ['Student not found'],
        });
      }

      const novoAluno = await aluno.update(req.body);

      return res.json(novoAluno);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errros: ['Student not found'],
        });
      }

      await aluno.destroy();

      return res.json({
        msg: 'Successfully deleted student',
      });
    } catch (e) {
      return res.status(400).json(null);
    }
  }
}

export default new AlunosController();
