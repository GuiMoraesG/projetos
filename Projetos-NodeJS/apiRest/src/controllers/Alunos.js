import Aluno from '../models/Aluno';

class AlunosController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
  }
}

export default new AlunosController();
