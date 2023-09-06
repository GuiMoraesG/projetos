import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUsuario = await User.create(req.body);
      res.json(novoUsuario);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
