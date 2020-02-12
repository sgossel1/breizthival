var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../config/passport')(passport);
var roles = require('../config/roles');
var controllers = require('../controllers/user.controllers');

router.post('/register', controllers.register);
router.post('/login', controllers.login);
router.post('/change_password', controllers.change_password);
router.post('/forgot_password', controllers.forgot_password);
router.get('/infos',
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.infos
);
router.post('/update/infos/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.update_infos
);
router.post('/update/password/:id',
  passport.authenticate('jwt', {
    session: false
  }),
  roles.roleAuthorization(['admin', 'benevole', 'association', 'evenement']),
  controllers.update_password
);

module.exports = router;
