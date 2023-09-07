import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const usuarios = await User.findAll();
      console.log(req.userId);
      console.log(req.userEmail);
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
      return res.json(novoUsuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id);

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
      const { id } = req.params;
      const usuario = await User.findByPk(id);

      if (!usuario) {
        return res.status(400).json({
          errors: ['User DO NOT EXIST'],
        });
      }

      const novoUsuario = await usuario.update(req.body);
      return res.json(novoUsuario);
    } catch (e) {
      return res.status(400).json({
        errors: null,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id);

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
