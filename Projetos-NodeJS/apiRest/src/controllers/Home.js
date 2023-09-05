class HomeController {
  index(req, res) {
    res.json({
      msg: 'Home',
    });
  }
}

export default new HomeController();
