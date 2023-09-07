import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const usuarios = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(usuarios);
    } catch (e) {
      return res.status(400).json({
        errors: null,
      });
    }
  }

  async store(req, res) {
    try {
      const novoUsuario = await User.create(req.body);
      const { id, nome, email } = novoUsuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const usuario = await User.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['User DO NOT EXIST'],
        });
      }

      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: null,
      });
    }
  }

  async update(req, res) {
    try {
      const usuario = await User.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['User DO NOT EXIST'],
        });
      }

      const novoUsuario = await usuario.update(req.body);
      const { id, nome, email } = novoUsuario;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: null,
      });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await User.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['User DO NOT EXIST'],
        });
      }

      await usuario.destroy();
      return res.json('User succefully removed');
    } catch (e) {
      return res.status(400).json({
        errors: null,
      });
    }
  }
}

export default new UserController();
