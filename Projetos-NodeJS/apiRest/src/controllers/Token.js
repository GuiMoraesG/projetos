import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['incomplete fields'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Unregistered email'],
      });
    }

    if (!bcryptjs.compareSync(password, user.password_hash)) {
      return res.status(401).json({
        errors: ['Password invalid'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
